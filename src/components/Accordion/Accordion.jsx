import React, { useState } from "react";

export const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    //
    <div
      className={`p-4 border-[#1976D2] border mb-4 rounded-md ${
        accordionOpen ? "bg-[#1976D21A]" : "bg-white"
      } `}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <div
          className={`font-semibold text-[0.9rem] flex items-center gap-2 ${
            accordionOpen ? "text-[#1976D2]" : "text-black"
          }  `}
        >
          <img
            className="w-8 border-[#1976D2] border p-2 rounded-md"
            src="/imgs/Union.png"
            alt="Union"
          />
          {title}
          <hr
            className={`${
              accordionOpen ? "font-bold text-black my-1 text-2xl" : "opacity-0"
            } `}
          />
        </div>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-black-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};
