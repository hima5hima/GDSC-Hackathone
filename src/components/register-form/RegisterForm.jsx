const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col p-4  ">
        {/* title */}
        <h3 className="text-3xl font-semibold">
          Create Account To
          <span className="text-amber-500"> Solution Challenge</span>
        </h3>
        <h4 className="mt-3 text-gray-500 ">Join To Our Commity Today </h4>
        {/* form */}
        <div className="flex justify-center mt-8 flex-col">
          <form>
            <label htmlFor="name" className="text-lg font-medium">
              Fill Name
            </label>
            <br />
            <input
              className="mt-2 border-spacing-1 w-full p-3 rounded-md outline-1 outline-amber-500 border border-gray-300"
              type="text"
              placeholder="Enter your Fill Name"
              required
            />
            {/* email */}
            <div className=" mt-3">
              <div className=" grid gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1 ">
                <div className="flex-auto ">
                  <label htmlFor="Email" className="text-lg font-medium">
                    Email
                  </label>
                  <br />
                  <input
                    className="mt-2 border-spacing-1 w-full p-3 rounded-md outline-1 outline-amber-500 border border-gray-300"
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className=" flex-auto">
                  <label htmlFor="email" className="text-lg font-medium">
                    Confirm Email
                  </label>
                  <br />
                  <input
                    className="mt-2 border-spacing-1 w-full p-3 rounded-md outline-1 outline-amber-500 border border-gray-300"
                    type="email"
                    placeholder="Enter your Confirm Email"
                    required
                  />
                </div>
              </div>
            </div>
            {/* password */}
            <div className=" mt-4">
              <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 content-center sm:grid-cols-1 ">
                <div className="flex-auto ">
                  <label htmlFor="Email" className="text-lg font-medium">
                    Password
                  </label>
                  <br />
                  <input
                    className="mt-2 border-spacing-1 w-full p-3 rounded-md outline-1 outline-amber-500 border border-gray-300"
                    type="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <div className=" flex-auto">
                  <label htmlFor="password" className="text-lg font-medium">
                    Confirm Password
                  </label>
                  <br />
                  <input
                    className="mt-2 border-spacing-1 w-full p-3 rounded-md outline-1 outline-amber-500 border border-gray-300"
                    type="password"
                    placeholder="Enter your Confirm Password"
                    required
                  />
                </div>
              </div>
            </div>
            <button className=" w-full mt-5 bg-amber-600 p-3 hover:bg-amber-500 transition-all rounded-md text-white ">
              Craete Account
            </button>
          </form>
          <button className=" w-full mt-5 bg-transparent p-3  hover:bg-gray-100 rounded-md text-black border border-amber-500 ">
            Login
          </button>
        </div>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-amber-400"></div>
          <span className="flex-shrink mx-4 text-gray-900">
            Or Continue with
          </span>
          <div className="flex-grow border-t border-amber-400"></div>
        </div>
        <div className="flex justify-center gap-5 ">
          <button className="border border-amber-500   hover:bg-gray-100 rounded-md w-20 p-3">
            <img
              className="w-20"
              src="/imgs/google-logo-search-new-svgrepo-com (4).png"
              alt="google"
            />
          </button>
          <button className="border border-amber-500  hover:bg-gray-100  rounded-md w-20 p-3">
            <img
              className="w-20"
              src="/imgs/facebook-svgrepo-com.png"
              alt="facebook"
            />
          </button>
          <button className="border border-amber-500   hover:bg-gray-100 rounded-md w-20 p-3">
            <img
              className="w-20"
              src="/imgs/apple-173-svgrepo-com.png"
              alt="apple"
            />
          </button>
        </div>
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
