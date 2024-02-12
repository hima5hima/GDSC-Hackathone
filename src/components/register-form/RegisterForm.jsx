import Button from "../Button/Button";
import InputField from "../input-field/InputField";
import PlatformsBtns from "../platforms-buttons/PlatformsBtns";

const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col p-12  ">
        {/* title */}
        <h2 className="greetings text-primary text-4xl font-semibold max-[1100px]:text-3xl max-[1000px]:text-2xl">
          Create Account To
          <span className="text-main"> Solution Challenge</span>
        </h2>
        <h4 className="mt-3 text-textShade ">Join To Our Commity Today </h4>
        {/* form */}
        <div className="flex justify-center mt-8 flex-col">
          <form>
            <InputField
              id="name"
              label="Full Name"
              placeholder="Eneter your Full Name"
              type="text"
            />

            {/* email */}
            <div className=" mt-3">
              <div className=" grid gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1 ">
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your Email"
                />

                <InputField
                  id="confirm-email"
                  label="Confirm Email"
                  type="email"
                  placeholder="Enter your Confirm Email"
                />
              </div>
            </div>
            {/* password */}
            <div className=" mt-4">
              <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1 ">
                <InputField
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your Password"
                />

                <InputField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter your Confirm Password"
                />
              </div>
            </div>
            <Button fill className="w-full mt-5 p-3 ">
              Create Account
            </Button>
          </form>
          <Button className=" w-full mt-5  p-3 ">Login</Button>
        </div>

        <PlatformsBtns />
      </div>
    </>
  );
};

export default RegisterForm;
{
  /* <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-4 text-gray-400">Content</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div> */
}
