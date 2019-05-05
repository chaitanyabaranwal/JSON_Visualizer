import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import JSONForm from './components/JSONForm';
import Prettify from './components/Prettify';
import Visualize from './components/Visualize';
import { SAMPLE_JSON } from './helpers/constants.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: SAMPLE_JSON,
      view_mode: 'input',
    }

    this.prettifyJSON = this.prettifyJSON.bind(this);
    this.inputView = this.inputView.bind(this);
    this.prettifyView = this.prettifyView.bind(this);
    this.visualizeView = this.visualizeView.bind(this);
  }

  // Functions to handle view change
  inputView() {
    this.setState({
      view_mode: 'input',
    });
  }
  
  prettifyView() {
    this.setState({
      view_mode: 'prettify',
    });
  }

  visualizeView() {
    this.setState({
      view_mode: 'visualize',
    });
  }

  // On clicking prettify JSON button
  prettifyJSON(json) {
    this.setState({
      json_data: json,
      view_mode: 'prettify',
    });
  }

  // On clicking visualize JSON button
  visualizeJSON(json) {
    this.setState({
      json_data: json,
      view_mode: 'visualize',
    });
  }

  render() {
    let view_mode = this.state.view_mode;
    let show_mode;

    switch (view_mode) {
      case 'input':
        show_mode = <JSONForm json={this.state.json_data} prettifySubmit={(json) => this.prettifyJSON(json)}
          visualizeSubmit={(json) => this.visualizeJSON(json)} />
        break;
      case 'prettify':
        show_mode = <Prettify json={this.state.json_data} />
        break;
      case 'visualize':
        show_mode = <Visualize json={this.state.json_data} />
        break;
      default:
        break;
    }

    return (
      <div>
        <Navbar inputView={this.inputView} prettifyView={this.prettifyView} visualizeView={this.visualizeView} />
        {show_mode}
      </div>
    );
  }
}

export default App;
