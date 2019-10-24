import React from "react"
import { Link } from "react-router-dom";
import Image from "../../images/DroomThumbnail.png";

////////////// Material UI imports //////////////////
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Tabs, Tab, Typography, Box, createMuiTheme } from '@material-ui/core';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      background: '#233536',
    },
    link: {
        textDecoration: 'none',
        color: '#fbffd8',
        "& *": {
            fontSize: '1rem',
        }
    },
    nav: {
        padding: '7px 7px 7px 7px',
        "& *": {
            display: 'flex',
            justifyContent: 'space-evenly',
        }
    },
  }));
  

export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logout = () => {
    localStorage.removeItem("token");
   }
    return (
    
        <div>
        <AppBar className={classes.root} position="static">
           
          <Tabs className={classes.nav} indicatorColor="orange" value={value} onChange={handleChange} aria-label="simple tabs example">
          <img className="logo" src={Image} alt="Droom Thumbnail Logo"/>
            <Link className={classes.link} to="/"><Tab label="Login" {...a11yProps(0)} /></Link>
            <Link className={classes.link} to="/profile"><Tab label="My Profile" {...a11yProps(1)} /></Link> 
            <Link className={classes.link} to="/jobs"><Tab label="Jobs" {...a11yProps(2)} /></Link>
            <Link className={classes.link} to="/dashboard"><Tab label="Dashboard" {...a11yProps(3)} /></Link>
            <Link className={classes.link} to='/company-landing'><Tab label="Companies" {...a11yProps(4)} /></Link>
            <Link className={classes.link} to="/" onClick={logout}><Tab label="Logout" {...a11yProps(5)} /></Link>
          </Tabs>
        </AppBar>
      </div>
    )
}
