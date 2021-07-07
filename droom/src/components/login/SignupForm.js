import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'

///////////imports Material UI components////////////
import { Paper, Typography, MenuItem, makeStyles, Button, TextField } from '@material-ui/core';

const users = [
    {
        value: "Jobseeker",
        label: 'Jobseeker'
    },
    {
        value: "Company",
        label: 'Company'
    },
]


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '30%',
        marginLeft: '30px',
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
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
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
        width: 325,
    },

    font: {
        color: '#0bcbc3',
        fontFamily: 'Liu Jian Mao Cao, cursive',
        fontSize: 65,
        paddingBottom: 20,
      },
}));

export default function SignupForm(props) {

    const classes = useStyles();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
    });

    const signup = e => {
        e.preventDefault()
        // console.log('values', values)
        axiosWithAuth()
            .post('api/register', values)
            .then(() => {
                const loginObject = {
                    username: values.username,
                    password: values.password
                }
                axiosWithAuth()
                    .post('api/login', loginObject)
                    .then(res => {
                        console.log('login', res.data.token)
                        localStorage.setItem('token', res.data.token)
                        props.history.push('/profile')
                    })
            })
            .catch(err => console.log('Login Error', err))
    }
    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    console.log('signup', signup)
    return (
        <Paper className={classes.root}>
            <form className={classes.container} autoComplete="off" onSubmit={signup}>
            <Typography className={classes.font} variant="h4">
                Sign Up!
              </Typography>
                <TextField
                    id="outlined-name"
                    label="username"
                    className={classes.textField}
                    type="name"
                    name="username"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
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
                />
                <TextField
                    id="outlined-select-userTypes"
                    select
                    label="Select User Type"
                    className={classes.textField}
                    value={values.role}
                    name="role"
                    onChange={handleChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select user type"
                    margin="normal"
                    variant="outlined"
                    required
                >
                    {users.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button className={classes.button} variant="contained" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}