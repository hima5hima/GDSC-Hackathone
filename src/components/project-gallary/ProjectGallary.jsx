import React from "react";

const ProjectGallary = ({ prjectRef }) => {
  const images = [
    "/imgs/gallary/gallary1.jpg",
    "/imgs/gallary/gallary2.jpg",
    "/imgs/gallary/gallary3.jpg",
    "/imgs/gallary/gallary4.webp",
  ];
  return (
    <div
      className="text-start border border-textShade p-3 rounded-2xl grow-1 shrink-0 w-[calc((100%-4.5rem)/3)] max-lg:w-[calc((100%-3rem)/2)] max-md:basis-[calc((100%-1.5rem))] box-border ml-3 shadow-lg"
      ref={prjectRef}
    >
      <h3 className="text-textShade text-lg mb-2">Team Name</h3>
      <div className="gallary grid grid-cols-4 grid-rows-3 gap-2  ">
        {images.map((image, index) => (
          <img
            src={image}
            key={image + index}
            className={`object-cover h-full rounded-xl   ${
              index === 0 ? "row-span-3 col-span-2" : ""
            } ${index === images.length - 1 ? "row-span-2 col-span-2" : ""}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallary;
