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
    this.drawChart();
  }

  componentWillUnmount() {
    this.removeChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    const w = 700;
    const h = 300;

    const svg = d3.select('body').append('svg').attr('width', w).attr('height', h).style('margin-left', 100);
    svg.selectAll('rect').data(data).enter().append('rect').attr('x', (d, i) => i * 70).attr('y', (d, i) => h - 10 * d).
      attr('width', 65).attr('height', (d, i) => d * 10).attr('fill', 'green');
  }

  removeChart() {
    d3.select('svg').remove();
  }

  render() {
    return <div></div>
  }
}

export default Visualize;