import React from "react";

export const Hero = () => {
  return (
    
    <section className="p-2 md:container mx-auto my-4">
      <div className="md:flex md:justify-around md:items-center">
        <div className="md:w-5/12">
          <img className="mb-3" />
          <h2 className="font-semibold text-3xl mb-3 leading-[2.8rem]">
            Develop yourself and enhance <span className="text-[#1976D2]">your skills</span>  by participating in the
            <span className="text-[#1976D2]"> Solution Challenge</span> Al-Azhar University
          </h2>
          <p className="text-[#666666] text-sm mb-6">
            In Google's annual global Solution Challenge Al-Azhar University
            competition, which invites all developers who have a project they
            want to bring to light, "And you are one of them!" To develop
            solutions to sustainable development problems.
          </p>
            <button className="bg-[#1976D2] text-white flex items-center justify-between gap-2 py-2 px-3 rounded-lg text-sm hover:bg-[#3a91e9]">
              Join Now
              <img className="w-100" alt="arrow" src="/imgs/Vector 9.png" />
            </button>
        </div>

        <div>
          <p>Slider</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
