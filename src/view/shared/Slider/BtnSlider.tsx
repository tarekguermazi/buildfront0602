import React from "react";
import "./Slider.css";
import { arrow__left, arrow__right } from "../../../assets/images";
export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      <img
        src={direction === "next" ? arrow__left : arrow__right}
        alt='arrow'
      />
    </button>
  );
}
