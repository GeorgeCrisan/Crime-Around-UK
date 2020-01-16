import Button from '@material-ui/core/Button';
import {  withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import deepPurple from '@material-ui/core/colors/deepPurple';

const ButtonPrimary = withStyles(() => ({
    root: {
      color: 'white',
      backgroundColor: deepPurple[500],
      marginBottom: 10,
      textAlign: "center",
      maxWidth: 300,
      '&:hover': {
        backgroundColor: red[900],
      },
    },
  }))(Button);


export default ButtonPrimary;