import React from 'react';
import Button from '@material-ui/core/Button';

// Form to handle JSON Input by users
class JSONForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: this.props.json,
    };

    this.handleChange = this.handleChange.bind(this);
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
            <Button onClick={() => this.props.prettifySubmit(this.state.json_data)} variant='contained' 
              color='primary' type='submit'>Prettify JSON</Button>
            &nbsp;&nbsp;
            <Button onClick={() => this.props.visualizeSubmit(this.state.json_data)} variant='contained' 
              color='primary' type='submit'>Visualize JSON</Button>
          </div>
        </form>
      </div>
    )
  }

}

export default (JSONForm);
