import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "auto",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
const Register = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registration successful!");
    history.push("/");
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h5">User Registration</Typography>
      <TextField
        label="Username"
        name="username"
        type="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button onClick={handleRegistration} variant="contained" color="primary">
        Register
      </Button>
      <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
          <Link to="/">Have an account? Login here</Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Register;
