import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import JSONForm from './components/JSONForm';
import Prettify from './components/Prettify';
import Visualize from './components/Visualize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: "{}",
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
      case 'visualize':
        show_mode = <Visualize json={this.state.json_data} />
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
