import * as d3 from 'd3';
import * as constants from '../helpers/constants.js';

// function to create SVG element
function createSvg() {
  const svg = d3.select('.json-graph')
                .append('svg')
                .attr('width', constants.width + constants.margin.left + constants.margin.right)
                .attr('height', constants.height + constants.margin.top + constants.margin.bottom);
  return svg.append('g').attr('transform', 'translate(' + constants.margin.left + ',' + constants.margin.top + ')');
}

// add links between nodes
function createLinks(container, nodes) {
  return container.selectAll('.link').data(nodes.descendants()
          .slice(1)).enter().append('path')
          .attr('class', 'link').attr('d', function(d) {
            return ('M ' + d.y + ',' + d.x +
            'C ' + (d.y + d.parent.y)/2 + ',' + d.x +
            ' ' + (d.y + d.parent.y)/2 + ',' + d.parent.x +
            ' ' + d.parent.y + ',' + d.parent.x); 
          });
}

// add each node as a group
function addNode(container, nodes) {
  return container.selectAll('.node').data(nodes.descendants()).enter().append('g')
          .attr('class', function(d) { 
            return 'node' + (d.children ? ' node-internal' : ' node-leaf') 
          }).attr('transform', function(d) { 
            return ('translate(' + d.y + ',' + d.x + ')')
          });
}

export {
  createSvg, createLinks, addNode
}