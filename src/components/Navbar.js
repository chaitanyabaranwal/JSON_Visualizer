import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Navbar to shift between views in the app
function Navbar(props) {
  return (
    <div className='navbar'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' style={{ flex:1 }}>JSON Visualizer</Typography>
          <Button color='inherit' onClick={props.inputView}>JSON-Input</Button>
          <Button color='inherit' onClick={props.prettifyView}>Prettify</Button>
          <Button color='inherit' onClick={props.visualizeView}>Visualize</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;