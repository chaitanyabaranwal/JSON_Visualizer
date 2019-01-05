import React, { Component } from 'react';
import './App.css';
import JSONForm from './components/JSONForm';
import Prettify from './components/Prettify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: "{}",
      view_mode: 'input',
    }

    this.prettifyJSON = this.prettifyJSON.bind(this);
  }

  prettifyJSON(json_data) {
    this.setState({
      json_data: json_data,
      view_mode: 'prettify',
    });
  }

  render() {
    let view_mode = this.state.view_mode;
    let show_mode;

    switch (view_mode) {
      case 'input':
        show_mode = <JSONForm json={this.state.json_data} handleSubmit={(json_data) => this.prettifyJSON(json_data)} />
        break;
      case 'prettify':
        show_mode = <Prettify json={this.state.json_data} />
        break;
    }

    return (
      <div>
        {show_mode}
      </div>
    );
  }
}

export default App;
