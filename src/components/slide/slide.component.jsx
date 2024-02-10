import React from "react";
import classes from "./slide.module.css";

function Slide({ item }) {
  return (
    <div className={classes["slide-container"]}>
      <div className={classes["image-box"]}>
        <img src={item.src} alt="girl" />
      </div>
      <div className={classes["text-box"]}>
        <span>"</span>
        <p>I am extremely happy with the Designs created by this Produce UI.</p>
      </div>
    </div>
  );
}
export default Slide;
