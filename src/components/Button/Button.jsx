import React from "react";

const Button = ({ children, fill, ...rest }) => {
  return (
    <button
      className={`rounded-lg border border-main border-solid p-2 ${
        fill ? "bg-main text-white hover:bg-blue-800" : "hover:bg-textShade"
      } transition-all duration-500 ease-out`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
