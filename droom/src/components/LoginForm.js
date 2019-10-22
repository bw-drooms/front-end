import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function LoginForm() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

    return (
        <div className="login-form">
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
            </form>
        </div>
    )
}