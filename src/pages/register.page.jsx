import React from "react";
import classes from "./register.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../components/register-form/register-form.component";

const Register = () => {
  return (
    <div className={classes.class}>
      <RegisterForm />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
