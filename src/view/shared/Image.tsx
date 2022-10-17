import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image(props) {
  const { src, width, height, alt, caption, key } = props;
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      key={key}
      effect='blur'
    />
  );
}

export default Image;
