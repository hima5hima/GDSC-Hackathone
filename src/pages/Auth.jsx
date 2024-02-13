import LoginForm from "../components/login-fom/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import Slider from "../components/slider/slider";
const Auth = () => {
  return (
    <>
      {/* this is some changes */}
      <div className="container mx-auto grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
        <Slider />
        {/* condiation */}
        <RegisterForm />
      </div>
    </>
  );
};
export default Auth;
