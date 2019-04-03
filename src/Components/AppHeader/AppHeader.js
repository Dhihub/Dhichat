import React from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Dhichat
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.user.displayName}
          </Typography>
          <Button color="inherit" onClick = {
            () =>{

              props.firebase.auth().signOut()

            props.history.push('/');

            }


          }>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state)=>{

  return {
    firebase: state.firebaseReducer.firebase,
    user:state.authReducer.user
  }
}

export default connect(mapStateToProps,null)(withStyles(styles)(withRouter(AppHeader)))
