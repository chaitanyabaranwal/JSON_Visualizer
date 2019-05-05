import React from 'react';
import Button from '@material-ui/core/Button';
import CustomizedSnackbar from './ErrorBar';

// Form to handle JSON Input by users
class JSONForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      json_data: this.props.json,
      invalid_json: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePrettifySubmit = this.handlePrettifySubmit.bind(this);
    this.handleVisualizeSubmit = this.handleVisualizeSubmit.bind(this);
  }

  validateJSON(json) {
    try {
      JSON.parse(json);
    }
    catch (err) {
      return false;
    }
    return true;
  }

  handlePrettifySubmit(event) {
    if (!this.validateJSON(this.state.json_data))
      this.setState({ invalid_json: true });
    else
      this.props.prettifySubmit(this.state.json_data);
  }

  handleVisualizeSubmit(event) {
    if (!this.validateJSON(this.state.json_data))
      this.setState({ invalid_json: true });
    else
      this.props.visualizeSubmit(this.state.json_data);
  }

  handleChange(event) {
    this.setState({ json_data: event.target.value });
  }

  render() {
    return (
      <div className='json-form'>
        <form>
          <textarea type='text' className='json-input' onChange={this.handleChange} value={this.state.json_data}
            rows='20' cols='80'>
            {this.props.json}
          </textarea>
          <br />
          <div className='form-btn-group'>
            <Button onClick={this.handlePrettifySubmit} variant='contained' 
              color='primary'>Prettify JSON</Button>
            &nbsp;&nbsp;
            <Button onClick={this.handleVisualizeSubmit} variant='contained' 
              color='primary'>Visualize JSON</Button>
          </div>
        </form>
        <CustomizedSnackbar open={this.state.invalid_json} />
      </div>
    )
  }

}

export default (JSONForm);
