import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import theme from './theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'gray',
    marginTop: '2em',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: '1em',
    letterSpacing: '2px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.footer} mt={2}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.title}>
          &copy; Suat Bayrak
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
