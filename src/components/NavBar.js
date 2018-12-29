import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// Default navbar visible throughout application
const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          JSON Visualizer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;