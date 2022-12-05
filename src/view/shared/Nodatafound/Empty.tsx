import React from "react";
import { BsBox } from "react-icons/bs";
import "./empty.css";
function Empty() {
  return (
    <div className='app__empty'>
      <div className='empty'>
        <h3 id='noDataFound'>
          <BsBox />
          &nbsp;No data found !
        </h3>
      </div>
    </div>
  );
}

export default Empty;
