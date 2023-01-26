import React from "react";
import GridContentLayout from "../styles/GridContentLayout";
import AudioPlayer from "../shared/AudioPlayer";
import { i18n } from "../../../i18n";

export default function Podcasts({ podcastList }) {
  return (
    <GridContentLayout>
      <div className="archieve__header">
        <h2>{i18n("entities.mediatique.enumerators.type.podcast")}</h2>
        <div className="satestique__bar"></div>
      </div>
      <div style={{ marginBottom: "2.1875rem" }} />
      <div className="grid">
        {podcastList?.map((pod) => {
          return (
            <AudioPlayer dataSource={pod} key={pod._id} />
            // END OF MAP RETURN
          );
        })}
      </div>
    </GridContentLayout>
  );
}
