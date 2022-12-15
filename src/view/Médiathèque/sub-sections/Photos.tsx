import React from "react";
import GridContentLayout from "../styles/GridContentLayout";
import VerticalPlayer from "../shared/VerticalPlayer";

export default function Photos({ photosList }) {
  return (
    <GridContentLayout>
      <div className='archieve__header'>
        <h2>photos</h2>
        <div className='satestique__bar'></div>
      </div>
      <div style={{ marginBottom: "2.1875rem" }} />
      <div className='grid'>
        {photosList?.map((photo) => {
          return (
            <VerticalPlayer dataSource={photo} key={photo._id} />
            // END OF MAP RETURN
          );
        })}
      </div>
    </GridContentLayout>
  );
}
