import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import OutlinedTextFields from './OutlinedTextFields';

const drawerWidth = "100%";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "auto",
    minWidth: 360
  },
  content: {
    flexGrow: 1,
    padding: 40,
  },
  button: {
    height: 32,
    fontSize: 14,
    alignSelf: 'center'
  }
}));






function PersistentDrawerTop(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
        code: '',
        date: new Date()
    });

  const  textfieldprops = {
    id: 'search by location',
    label: 'Insert Location',
    placeholder: "City/Town in UK...",
    variant: "outlined"
  };

  function submitThecode(e){
    e.preventDefault();
  }

  return (<div>
    <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="top"
    open={props.openDrawer}
    classes={{
      paper: classes.drawerPaper,
    }}
      >
      <form onSubmit={(e)=>{e.preventDefault()}} className={classes.container} noValidate autoComplete="off">
        <OutlinedTextFields textfieldprops={textfieldprops} values={values}  setValues={setValues} />
        <Button type="button" onClick={submitThecode} size="small" variant="outlined" color="primary"  className={classes.button}>
         Next
      </Button>
      </form>
      
      </Drawer>
    </div>
  );
}



export default PersistentDrawerTop;