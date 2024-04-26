import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/cat.png';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  const logout = () => {

  };

  return (
  
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">MemoriesCAD</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Đăng Nhập</Button>
          )}
        </Toolbar>
      </AppBar>
   
  );
};

export default Navbar;