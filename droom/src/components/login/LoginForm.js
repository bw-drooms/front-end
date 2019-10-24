import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'
import axiosWithAuth from '../../utils/axiosWithAuth'
import {Paper, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '30%',
    marginRight: '30px',
    backgroundColor: '#fbffd8',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 500,
  },
  button: {
    margin: theme.spacing(1),
    height: 40,
    backgroundColor: '#233536',
    color: '#fbffd8',
  }
}));



const LoginForm =(props) => {
    const classes = useStyles();  
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const login = e => {
      e.preventDefault()
      console.log('login', values)
      axiosWithAuth()
      .post('api/login', values)
      .then(res => {
          console.log('login', res.data.token)
          localStorage.setItem('token', res.data.token)
          props.history.push('/profile')
       })
       .catch(err => console.log('Login Error', err))
    }

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

    return (
        <Paper className={classes.root}>
            <form className={classes.container} autoComplete="off" onSubmit={login}>
                <TextField
                    id="outlined-username-input"
                    label="username"
                    className={classes.textField}
                    type="username"
                    name="username"
                    autoComplete="username"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name='password'
                    autoComplete="current-password"
                    margin="normal"
                    onChange={handleChange}
                    variant="outlined"
                    required
                />
                <Button className={classes.button} variant="contained" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}
const mapStateToProps = state => {
  return {

  }
}
export default connect(mapStateToProps, null)(LoginForm)