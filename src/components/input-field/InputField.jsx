import React from "react";

const InputField = ({ type, id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="px-4 py-2 rounded-lg placeholder:text-textShade border border-textShade"
      />
    </div>
  );
};

export default InputField;
