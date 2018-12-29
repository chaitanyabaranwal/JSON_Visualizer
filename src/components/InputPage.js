import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

// Form to handle JSON Input by users
class JSONForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A JSON was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} styles={{ margin: 'auto'}}>
                <textarea type='text' onChange={this.handleChange} value={this.state.value} />
                <br />
                <Button variant='contained' color='primary' type='submit'>
                    Submit JSON
                </Button>
            </form>
        )
    }

}

// Main input page containing heading, input form and submit button
class InputPage extends React.Component {
    render() {
        return (
            <div>
                <Typography align='center' color='inherit' variant='display1'>
                    JSON_Visualizer
                </Typography>
                <JSONForm />
            </div>
        )
    }

}

export default InputPage;
