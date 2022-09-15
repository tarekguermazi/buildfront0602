import React from "react";
import Spinner from "./Spinner";

const ButtonIcon = (props) => {
  return props.loading ? <Spinner /> : null;
};

export default ButtonIcon;
