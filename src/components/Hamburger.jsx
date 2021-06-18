import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import {ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import RedditIcon from '@material-ui/icons/Reddit';
import {NavLink} from 'react-router-dom';




const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft:10,
    paddingRight:5,
 

  },
  link:{
    color:"black",
    textDecoration:"none"
  },

  fullList: {
    width: 'auto',


  },


});

export default function Hamburger() {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,

  });




  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
   
          Categories
          </ListItem>
     
      </List>
      <Divider/>
      
    
<List >
          
      <NavLink to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary={"Home"}/>
        </ListItem>
        </NavLink>
        <NavLink to="/business" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon/>
          </ListItemIcon>
          <ListItemText primary={"Business"}/>
        </ListItem>
        </NavLink>
        <NavLink to="/entertainment" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <LocalBarIcon/>
          </ListItemIcon>
          <ListItemText primary={"Entertainment"}/>
        </ListItem>
        </NavLink>
        <NavLink to="/health" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <LocalHospitalIcon/>
          </ListItemIcon>
          <ListItemText primary={"Health"}/>
        </ListItem>
        </NavLink>

      
        <NavLink to="/sports" className={classes.link} >
        <ListItem button>
          <ListItemIcon>
            <SportsKabaddiIcon/>
          </ListItemIcon>
          <ListItemText primary={"Sports"}/>
        </ListItem>
        </NavLink>
        <NavLink to="/technology" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
          <ImportantDevicesIcon/> 
          </ListItemIcon>
          <ListItemText primary={"Technology"}/>
        </ListItem>
        </NavLink>
        <NavLink to="/science" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
          <RedditIcon/> 
          </ListItemIcon>
          <ListItemText primary={"Science"}/>
        </ListItem>
        </NavLink>


     


   
      </List>
   
  
    </div>
  );

  return (
    <div>
      
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon/>
          </Button>
      
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>


        

        </React.Fragment>
    
    </div>
  );
}