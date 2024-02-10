import React from "react";
import Carousel from "react-material-ui-carousel";
import Slide from "../slide/slide.component";
import items from "../../../slider.json";
import GDSCLogo from "../../assets/GDSC logo.png";

import classes from "./slider.module.css";

const Slider = (props) => {
  return (
    <section className={classes["slider-container"]}>
      <div className={classes.logo}>
        <img
          src={GDSCLogo}
          alt="Al-Azhar Google Dveloper Students Clubs logo"
        />
      </div>
      <h2 className={classes.greating}>
        Welcome to <span>Solution Challenge</span>
      </h2>
      <p>
        Get to know the opinions of some of the participants in the Solution
        Challenge 2023
      </p>
      <Carousel>
        {items.map((item) => (
          <Slide key={item.id} item={item} />
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
