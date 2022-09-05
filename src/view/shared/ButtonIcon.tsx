import React from "react";

const ButtonIcon = (props) => {
  return props.loading ? (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : null;
};

export default ButtonIcon;
