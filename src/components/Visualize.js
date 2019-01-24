import React from 'react';
import { tree, hierarchy, select } from 'd3';
import { ToJsonTree } from '../helpers/json-tree.js';
import { height, width } from '../helpers/constants.js';
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

    console.log(this.state.json_data);

    // assign json data to node-layout
    const treemap = tree().size([height, width]);
    const nodes = treemap(hierarchy(this.state.json_data))

    // append svg to body of page
    const container = visualize.createSvg();

    // add links between nodes
    visualize.createLinks(container, nodes);
    
    // add each node as a group
    const node = visualize.addNode(container, nodes);

    // display nodes as circle with descriptions
    visualize.styleNode(node);
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