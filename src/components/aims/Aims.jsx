import React, { useRef } from "react";
import Aim from "./Aim";
import Carousel from "../carousel-with-pagination/Carousel";
import aims from "../../../aims.json";

const Aims = () => {
  const aimRef = useRef();

  return (
    <div className="border-b border-textShade">
      <div className="container aims overflow-hidden mx-auto my-12 ">
        <div className="text-box mb-6 text-center">
          <h2 className="greetings text-primary text-4xl font-semibold max-[1100px]:text-3xl max-[1000px]:text-2xl mb-5">
            The 17 Sustainable{" "}
            <span className="text-main">Development Goals</span>
          </h2>
          <p className="text-textShade text-lg ">
            Lorem ipsum dolor sit amet consectetur. Turpis amet potenti auctor
            nisl ullamcorper semper maecenas.{" "}
          </p>
        </div>
        <Carousel items={aims} slideRef={aimRef}>
          {aims.map((aim, i) => (
            <Aim aim={aim} someRef={aimRef} key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Aims;
