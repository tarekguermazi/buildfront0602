import React from "react";
import GridContentLayout from "../styles/GridContentLayout";
import SectionHeader from "../shared/SectionHeader";
import VerticalPlayer from "../shared/VerticalPlayer";

export default function Videos({ videosList }) {
  return (
    <GridContentLayout>
      <div className='archieve__header'>
        <h2>Videos</h2>
        <div className='satestique__bar'></div>
      </div>
      <div className='grid'>
        {videosList?.map((vid) => {
          return (
            <VerticalPlayer dataSource={vid} key={vid._id} />
            // END OF MAP RETURN
          );
        })}
      </div>
    </GridContentLayout>
  );
}
