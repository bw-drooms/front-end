import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const users = [
    {
        value: "Jobseeker",
        label: 'Jobseeker'},
    {
        value: "Company",
        label: 'Company'},
]

const useStyles = makeStyles(theme => ({
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

export default function SignupForm() {

    const classes = useStyles();  
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userTypes: "",
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

    return (
        <div className="signup-form">
            <form className={classes.container} autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="First Name"
                    className={classes.textField}
                    type="name"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="outlined-name"
                    label="Last Name"
                    className={classes.textField}
                    type="name"
                    name="name"
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
                    value={values.userTypes}
                    onChange={handleChange('userTypes')}
                    SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                    }}
                    helperText="Please select your user type"
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
        </div>
    )
}