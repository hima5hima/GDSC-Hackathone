import React from "react";
import classes from "./login.module.css";
import { Link } from "react-router-dom";
import LoginForm from "../components/login-fom/login-form.component";

const Login = () => {
  return (
    <div className={classes.class}>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
