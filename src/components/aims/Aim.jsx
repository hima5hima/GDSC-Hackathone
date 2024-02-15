import React from "react";

const Aim = ({ someRef, aim }) => {
  return (
    <div
      className="flex flex-col shadow-lg p-5 shrink-0 border border-textShade rounded-3xl w-[calc((100%-6rem)/4)] max-lg:w-[calc((100%-3rem)/2)]  max-sm:basis-[calc(100%-1.5rem)] ml-3 "
      ref={someRef}
    >
      <span
        className="w-full h-3 rounded-t-full inline-block"
        style={{ backgroundColor: aim.color }}
      ></span>
      <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto my-4">
        <img src={aim.image} alt={aim.slogan} className="scale-[1.24] " />
      </div>
      <h3 className="font-medium text-xl my-2 text-center">{aim.title}</h3>
      <p className="text-medium font-medium max-sm:text-center">{aim.slogan}</p>
      {aim.slogan && <hr className="w-[90%] border-textShade my-2 mx-auto" />}
      <div className="some-examples grow flex flex-col items-start max-sm:items-center">
        <p className="mt-6">Some Example Projects</p>
        {aim.examples.map((example) => (
          <a
            className="text-sm underline text-textShade mt-4 inline-block"
            href="#"
          >
            {example + " ->"}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Aim;
