import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '45%',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    height: 40,
  }
}));

export default function LoginForm() {

    const classes = useStyles();  
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

    return (
        <div className="login-form">
            <form className={classes.container} autoComplete="off">
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
                    autoComplete="current-password"
                    margin="normal"
                    onChange={handleChange}
                    variant="outlined"
                    required
                />
                <Button className={classes.button} variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}