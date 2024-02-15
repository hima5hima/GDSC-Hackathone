import  { useState } from "react";
import Button from "../Button/Button";
import InputField from "../input-field/InputField";
import { Link } from "react-router-dom";
import PlatformsBtns from "../platforms-buttons/PlatformsBtns";

const LoginForm = () => {
  const [rememberIsChecked, setRememberIsChecked] = useState(false);
  return (
    <div className="my-auto p-12">
      <h2 className="greetings text-primary text-4xl font-semibold max-[1100px]:text-3xl max-[1000px]:text-2xl">
        Login To <span className="text-main">Solution Challenge</span>
      </h2>
      <p className="text-textShade text-lg ">
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

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="rounded-sm bg-btnHoverBg border-main text-main focus:ring-0 "
              checked={rememberIsChecked}
              onClick={() => setRememberIsChecked((isChecked) => !isChecked)}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <Link className="text-sm text-main underline">Forget Password?</Link>
        </div>

        <Button type="submit" fill className="p-3">
          login
        </Button>
      </form>
      <Button className="w-full mt-5 p-3 ">Sign Up</Button>
      <PlatformsBtns />
    </div>
  );
};

export default LoginForm;
