import React from "react";
import { Accordion } from "../Accordion/Accordion";

export const Asked = () => {
  return (
    <section className="p-2 md:container mx-auto">
      <div className="text-center mb-3">
        <h2 className="font-semibold text-3xl mb-2">
          Frequently Asked <span className="text-[#1976D2]">Qustions</span>
        </h2>
        <p className='text-[#92929D] text-sm mb-8'>
          You have a project and want to implement it, let's communicate
          together now via <span className="text-[#1976D2]">XXXXXXXXXXXX@gmail.com</span> 
        </p>
      </div>

      <div className="md:flex justify-between items-start gap-4">
        <div className="sm:mb-4 md:mb-0 md:max-w-[25%] border-[#1976D2] border py-6 px-3 ">
        <img className='w-9 border-[#1976D2] border p-2 rounded-sm mb-3' src="/imgs/Star 5 (Stroke).png"/>
          <h3 className="font-semibold text-xl mb-1">
            Ask Your <span className="text-[#1976D2]">Question</span>
          </h3>
          <p className="text-[#92929D] text-sm mb-2">
            If the question is not available on our FAQ section, Feel free to
            contact us
          </p>
          <button className='bg-[#1976D2] text-white py-2 px-5 rounded-md text-sm hover:bg-[#3a91e9]'>Ask Question</button>
        </div>


        <div className="md:w-10/12 border-[#1976D2] border p-3 rounded-md">
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Turpis amet potenti auctor nisl ullamcorper semper maecenas."
            answer="Lorem ipsum dolor sit amet consectetur. Consectetur malesuada aliquet elit interdum in. Sed Aliquam Neque ac placerat dignissim at tortor. Egestas tristique urna amet volutpat. We will sit at nulla nisl. Nisi nulla audio ipsum pulvinar eu elementum volutpat lectus suscipit. Varius fermentum sed sit aenean id mi. This is the most important thing. Curabiteur sed elementum ut habitant sit. Pharetra in ipsum non cursus egestas egestas day cras. My risus lobortis mattis fermentum. Non-viverra arcu quam amet vitae id augue id."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Turpis amet potenti auctor nisl ullamcorper semper maecenas."
            answer="Lorem ipsum dolor sit amet consectetur. Consectetur malesuada aliquet elit interdum in. Sed Aliquam Neque ac placerat dignissim at tortor. Egestas tristique urna amet volutpat. We will sit at nulla nisl. Nisi nulla audio ipsum pulvinar eu elementum volutpat lectus suscipit. Varius fermentum sed sit aenean id mi. This is the most important thing. Curabiteur sed elementum ut habitant sit. Pharetra in ipsum non cursus egestas egestas day cras. My risus lobortis mattis fermentum. Non-viverra arcu quam amet vitae id augue id."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Turpis amet potenti auctor nisl ullamcorper semper maecenas."
            answer="Lorem ipsum dolor sit amet consectetur. Consectetur malesuada aliquet elit interdum in. Sed Aliquam Neque ac placerat dignissim at tortor. Egestas tristique urna amet volutpat. We will sit at nulla nisl. Nisi nulla audio ipsum pulvinar eu elementum volutpat lectus suscipit. Varius fermentum sed sit aenean id mi. This is the most important thing. Curabiteur sed elementum ut habitant sit. Pharetra in ipsum non cursus egestas egestas day cras. My risus lobortis mattis fermentum. Non-viverra arcu quam amet vitae id augue id."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Turpis amet potenti auctor nisl ullamcorper semper maecenas."
            answer="Lorem ipsum dolor sit amet consectetur. Consectetur malesuada aliquet elit interdum in. Sed Aliquam Neque ac placerat dignissim at tortor. Egestas tristique urna amet volutpat. We will sit at nulla nisl. Nisi nulla audio ipsum pulvinar eu elementum volutpat lectus suscipit. Varius fermentum sed sit aenean id mi. This is the most important thing. Curabiteur sed elementum ut habitant sit. Pharetra in ipsum non cursus egestas egestas day cras. My risus lobortis mattis fermentum. Non-viverra arcu quam amet vitae id augue id."
          />
        </div>

      </div>
    </section>
  );
};
export default Asked;
