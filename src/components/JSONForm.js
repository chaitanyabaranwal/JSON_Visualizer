import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// Form to handle JSON Input by users
class JSONForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.json};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <Typography align='center' color='inherit' variant='display1'>
            JSON Visualizer
        </Typography>
        <div className='justified'>
          <form onSubmit={() => this.props.handleSubmit(this.state.value)}>
            <textarea type='text' onChange={this.handleChange} value={this.state.value} rows='20' cols='80'>
              {this.props.json}
            </textarea>
            <br />
            <Button variant='contained' color='primary' type='submit'>
              Submit JSON
            </Button>
          </form>
        </div>
      </div>
    )
  }

}

export default JSONForm;
