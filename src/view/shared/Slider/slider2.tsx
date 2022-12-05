import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { dataSlider, bottomSLider } from "./dataSlider";
import Image from "../../shared/Image";
import PropTypes from "prop-types";
function Slider2(props) {
  const alt = props.slider;
  const rows = props.rows;
  const [slideIndex, setSlideIndex] = useState(1);
  const width = Number(props.width);
  const height = Number(props.height);

  const nextSlide = () => {
    if (slideIndex !== rows.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === rows.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(rows.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='container-slider' style={{ width: width, height: height }}>
      {props.rows.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }>
            <Image width={width} height={height} src={undefined} alt={alt} />
            {props.render(obj)}
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      {props?.showDots && (
        <div className='container-dots'>
          {props.rows.map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
          ))}
        </div>
      )}
      {!props?.showDots && (
        <div className='content__sliderBottom'>
          {bottomSLider.map((item, index) =>
            props.bottomrender(item, index, slideIndex)
          )}
        </div>
      )}
    </div>
  );
}

Slider2.propTypes = {
  rows: PropTypes.any,
  label: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  render: PropTypes.func,
  bottomrender: PropTypes.func,
  showDots: PropTypes.bool,
};
export default Slider2;
