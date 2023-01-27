import React from "react";
import GridContentLayout from "../styles/GridContentLayout";
import VerticalPlayer from "../shared/VerticalPlayer";
import { i18n } from "src/i18n";

export default function Videos({ videosList }) {
  return (
    <GridContentLayout>
      <div className="archieve__header">
        <h2>{i18n("entities.mediatique.enumerators.type.videos")}</h2>
        <div className="satestique__bar"></div>
      </div>
      <div style={{ marginBottom: "2.1875rem" }} />
      <div className="grid">
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
