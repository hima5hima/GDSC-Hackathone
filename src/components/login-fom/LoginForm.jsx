import React, { useState } from "react";
import Button from "../Button/Button";
import InputField from "../input-field/InputField";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [rememberIsChecked, setRememberIsChecked] = useState(false);
  return (
    <div className="my-auto">
      <h2 className="greetings text-primary text-2xl font-semibold">
        Login To <span className="text-main">Solution Challenge</span>
      </h2>
      <p className="text-textShade text-lg">
        Welcome back! Please log in to access your account.
      </p>
      <form className="flex flex-col gap-4">
        <InputField
          type="email"
          id="email"
          label="Email"
          placeholder="Enter your Email"
        />
        <InputField
          type="password"
          id="password"
          label="Password"
          placeholder="Enter your Password"
        />

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="size-4 border-main ml-2"
              checked={rememberIsChecked}
              onClick={() => setRememberIsChecked((isChecked) => !isChecked)}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <Link className="text-lg">Forget Password?</Link>
        </div>

        <Button type="submit" fill>
          login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
