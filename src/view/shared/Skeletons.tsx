import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";
function Skeletons(props) {
  const { height, width } = props;

  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <Skeleton height={height} width={width} />
    </SkeletonTheme>
  );
}

Skeletons.prototype = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Skeletons;
