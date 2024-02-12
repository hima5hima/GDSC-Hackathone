import React from "react";
import Button from "../Button/Button";

const PlatformsBtns = () => {
  return (
    <>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-main"></div>
        <span className="flex-shrink mx-4 text-textShade">
          Or Continue with
        </span>
        <div className="flex-grow border-t border-main"></div>
      </div>
      <div className="flex justify-center gap-5 ">
        <Button className="size-16 ">
          <img
            className="w-full"
            src="/imgs/google-logo-search-new-svgrepo-com (4).png"
            alt="google"
          />
        </Button>
        <Button className="size-16 ">
          <img
            className="w-full"
            src="/imgs/facebook-svgrepo-com.png"
            alt="facebook"
          />
        </Button>
        <Button className="size-16 ">
          <img
            className="w-full"
            src="/imgs/apple-173-svgrepo-com.png"
            alt="apple"
          />
        </Button>
      </div>
    </>
  );
};

export default PlatformsBtns;
