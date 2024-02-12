import React from "react";
import LoginForm from "../components/login-fom/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import Slider from "../components/slider/slider";
const Auth = () => {
  return (
    <>
      <div className="container mx-auto  ">
        {/* <div className="container mx-auto grid grid-cols-2 gap-14 max-[900px]:grid-cols-1"> */}
        <div className="grid   gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1  ">
          <Slider />
          <RegisterForm />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Auth;
