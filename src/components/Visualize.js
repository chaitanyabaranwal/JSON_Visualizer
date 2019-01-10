import React from 'react';
import * as d3 from 'd3';

// Output of visualized JSON
class Visualize extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      json_data: this.props.json,
    }
  }

  componentDidMount() {
    this.visualizeJson();
  }

  componentWillUnmount() {
    this.removeJson();
  }

  visualizeJson() {
    // set dimensions of margins of diagram
    var margin = {top: 20, left: 90, bottom: 30, right: 90}, width = 600 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    var treemap = d3.tree().size([height, width]);

    // assign json data to node-layout
    var nodes = d3.hierarchy(JSON.parse(this.state.json_data), function(d) {
      console.log(d.children);
      return d.children; 
    });
    nodes = treemap(nodes);

    // append svg to body of page
    var svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right).
      attr('height', height + margin.top + margin.bottom);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // add links between nodes
    var link = g.selectAll('.link').data(nodes.descendants().slice(1)).enter().append('path').attr('class', 'link').
      attr('d', function(d) {
        return ('M ' + d.y + ',' + d.x +
          'C ' + (d.y + d.parent.y)/2 + ',' + d.x +
          ' ' + (d.y + d.parent.y)/2 + ',' + d.parent.x +
          ' ' + d.parent.y + ',' + d.parent.x); 
      });
    
    // add each node as a group
    var node = g.selectAll('.node').data(nodes.descendants()).enter().append('g').
      attr('class', function(d) { return ('node ' + d.children ? 'node-internal' : 'node-leaf')}).
      attr('transform', function(d) { return ('translate(' + d.y + ',' + d.x + ')')});

    // add circle to node
    node.append('circle').attr('r', 10);
  }

  removeJson() {
    d3.select('svg').remove();
  }

  render() {
    return <div></div>
  }
}

export default Visualize;