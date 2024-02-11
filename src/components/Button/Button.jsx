import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="rounded-lg border border-main border-solid p-2"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
