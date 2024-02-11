import React from "react";
import LoginForm from "../components/login-fom/LoginForm";
import Slider from "../components/slider/slider";
const Auth = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-14 max-[900px]:grid-cols-1">
      <Slider />
      <LoginForm />
    </div>
  );
};

export default Auth;
