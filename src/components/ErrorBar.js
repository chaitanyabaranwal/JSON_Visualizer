import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, ...other } = props;
  const Icon = ErrorIcon;

  return (
    <SnackbarContent
      className={classNames(classes.error, className)}
      aria-describedby='client-snackbar'
      message={
        <span id='client-snackbar' className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key='close'
          aria-label='Close'
          color='inherit'
          className={classes.close}
          onClick={onClose}
        ></IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class CustomizedSnackbar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={4000}
          onClose={this.handleClose}>
          <MySnackbarContentWrapper
            message='This is an invalid JSON! Please check and re-submit.'
          />
        </Snackbar>

      </div>
    );
  }
}

CustomizedSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles2)(CustomizedSnackbar);