import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.class}>
      This is the Login page
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
