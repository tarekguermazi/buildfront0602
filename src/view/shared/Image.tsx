import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image(props) {
  const { src, width, height, alt, caption, key } = props;
  let srcs = src ? src : `https://placehold.jp/${width}x${height}.png`;
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={srcs} // use normal <img> attributes as props
      width={width}
      key={key}
      effect='blur'
      caption={caption}
    />
  );
}

export default Image;
