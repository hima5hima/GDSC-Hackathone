import React from "react";

const Button = ({ children, fill, className, ...rest }) => {
  return (
    <button
      className={`${className} rounded-lg border border-main border-solid p-2 ${
        fill
          ? "bg-main text-white hover:bg-mainDark hover:border-mainDark"
          : "hover:bg-btnHoverBg"
      } transition-all duration-500 ease-out`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
