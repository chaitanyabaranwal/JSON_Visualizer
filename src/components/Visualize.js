import React from 'react';
import { tree, hierarchy, select } from 'd3';
import { ToJsonTree } from '../helpers/json-tree.js';
import { height, width, node_radius, text_position } from '../helpers/constants.js';
import * as visualize from '../helpers/json-visualize.js';

// Output of visualized JSON
class Visualize extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      json_data: ToJsonTree(JSON.parse(this.props.json), "response"),
    }
  }

  visualizeJson() {

    // assign json data to node-layout
    const treemap = tree().size([height, width]);
    const nodes = treemap(hierarchy(this.state.json_data))

    // append svg to body of page
    const container = visualize.createSvg();

    // add links between nodes
    const link = visualize.createLinks(container, nodes);
    
    // add each node as a group
    const node = visualize.addNode(container, nodes);

    // add circle to node
    node.append('circle').attr('r', node_radius);

    // add text to node
    node.append('text').attr('dy', '.35em')
      .attr('x', function(d) { return d.children ? -text_position : text_position; })
      .style('text-anchor', function(d) { return d.children ? 'end' : 'start' })
      .text(function(d) { return d.data.name });
  }

  removeJson() {
    select('svg').remove();
  }

  componentDidMount() {
    this.visualizeJson();
  }

  componentWillUnmount() {
    this.removeJson();
  }

  render() {
    return <div className='json-graph'></div>
  }
}

export default Visualize;