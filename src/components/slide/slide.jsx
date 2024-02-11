import React from "react";

const Slide = ({ imagePath }) => {
  return (
    <div className="flex-none w-full overflow-hidden">
      <div className="image-box mx-auto overflow-hidden ">
        <img
          src={`${imagePath}`}
          alt="girl image"
          className="object-cover rounded-2xl w-[300px] m-auto"
        />
      </div>
      <div className="text-box bg-white shadow-lg p-6 text-center w-4/5 rounded-2xl mx-auto mt-[-3rem] z-10 relative ">
        <span className="text-main text-4xl">"</span>
        <p className="text-lg text-textShade ">
          I am extremely happy with the Designs created by this Produce UI.
        </p>
      </div>
    </div>
  );
};

export default Slide;
