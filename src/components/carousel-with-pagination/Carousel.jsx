import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Carousel = ({ children, className, items, slideRef }) => {
  const [current, setCurrent] = useState(0);
  const [itemsOnTheScreen, setItemsOnTheScreen] = useState(3);
  const carouselRef = useRef();
  const numOfButtons = items.length + 1 - itemsOnTheScreen;

  const allButtons = [];
  for (let i = 0; i < numOfButtons; i++) {
    allButtons.push(
      <Button
        key={i}
        className="size-9 flex justify-center items-center"
        fill={i === current ? true : false}
        onClick={() => handleBtnClick(i)}
      >
        {i + 1}
      </Button>
    );
  }

  const shownButtons = allButtons.map((btn, i) => {
    if (
      i === 0 ||
      i === numOfButtons - 1 ||
      i === numOfButtons - 2 ||
      i === current ||
      i === current + 1
    )
      return btn;
  });

  useEffect(() => {
    setItemsOnTheScreen(
      Math.floor(carouselRef.current.offsetWidth / slideRef.current.offsetWidth)
    );
  }, [window.innerWidth]);
  const prev = () => {
    setCurrent((curr) =>
      curr === 0 ? items.length - itemsOnTheScreen : curr - 1
    );
  };

  const next = () => {
    setCurrent((curr) =>
      curr === items.length - itemsOnTheScreen ? 0 : curr + 1
    );
  };

  const handleBtnClick = (index) => {
    setCurrent(index);
  };

  const paginationNav = shownButtons.map((btn) => btn);
  return (
    <>
      <div
        ref={carouselRef}
        className={
          "gallary-carousel flex gap-3  mx-auto relative flex-nowrap mb-6 transition-transform ease-out duration-500 " +
          className
        }
        style={{
          transform: `translateX(-${(current * 100) / itemsOnTheScreen}%)`,
        }}
      >
        {children}
      </div>
      <div className="pagination flex justify-center gap-4 max-w-[400px] mx-auto">
        <Button className="size-9" key="btn prev" fill onClick={prev}>
          <FaAngleLeft />
        </Button>
        <div className="numbers flex gap-2">{paginationNav}</div>
        <Button className="size-9" key="btn next" fill onClick={next}>
          <FaAngleRight />
        </Button>
      </div>
    </>
  );
};

export default Carousel;
