import React from "react";
import classes from "./auth.module.css";
import Slider from "../components/slider/slider.component";
import LoginForm from "../components/login-fom/login-form.component";
const Auth = () => {
  return (
    <div className={classes["auth-container"]}>
      <Slider />
      <LoginForm />
    </div>
  );
};

export default Auth;
