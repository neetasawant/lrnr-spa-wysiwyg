import React from "react";
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Paper, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.email === formData.email &&
      userData.password === formData.password
    ) {
      alert("Login successful!");
      history.push("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h5">User Login</Typography>
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
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
      <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
          <Link to="/register">Don't have an account? Register here</Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
