import React from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={classes.class}>
      This is the Register page
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
