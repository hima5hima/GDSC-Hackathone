import React from "react";
import LoginForm from "../components/login-fom/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import Slider from "../components/slider/slider";
const Auth = () => {
  return (
    <>
      {/*  */}
      <div className="container mx-auto grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
        <Slider />
        <RegisterForm />
      </div>
    </>
  );
};
export default Auth;
