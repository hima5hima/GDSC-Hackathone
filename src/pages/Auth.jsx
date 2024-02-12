import RegisterForm from "../components/register-form/RegisterForm";
import Slider from "../components/slider/Slider.jsx";
const Auth = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="grid   gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1  ">
          <Slider />
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Auth;
