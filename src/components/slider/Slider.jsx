/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Slide from "../slide/slide";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Button from "../Button/Button";

const Slider = () => {
  const images = [
    "/imgs/girl.jpg",
    "/imgs/girl.jpg",
    "/imgs/girl.jpg",
    "/imgs/girl.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="p-12 bg-bgColor flex flex-col items-center gap-4">
      <div className="image-box w-[300PX] mx-auto">
        <img
          src="/imgs/GDSC logo.png"
          alt="Al-Azhar Google Developer Student Club logo"
        />
      </div>
      <h2 className="greetings text-primary text-2xl font-semibold text-center">
        Welcome to <span className="text-main">Solution Challenge</span>
      </h2>
      <p className="text-textShade text-center text-lg">
        Get to know the opinions of some of the participants in the Solution
        Challenge 2023
      </p>
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((imagePath, i) => (
            <Slide key={i} imagePath={imagePath} />
          ))}
        </div>
      </div>
      <div className="controlers  flex justify-center gap-8">
        <Button onClick={prev}>
          <FaAngleLeft />
        </Button>
        <div className="indicators flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`transition-all size-2 rounded-full ${
                current === i ? "bg-main" : "bg-textShade "
              }`}
            />
          ))}
        </div>
        <Button onClick={next}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
