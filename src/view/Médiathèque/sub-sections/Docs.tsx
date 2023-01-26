import React from "react";
import GridContentLayout from "../styles/GridContentLayout";

import DocsCard from "../shared/DocsCard";
import { i18n } from "src/i18n";

export default function Docs({ docstList }) {
  return (
    <GridContentLayout>
      <div className="archieve__header">
        <h2>{i18n("entities.mediatique.enumerators.type.documentaire")}</h2>
        <div className="satestique__bar"></div>
      </div>
      <div style={{ marginBottom: "2.1875rem" }} />
      <div className="grid">
        {docstList?.map((doc) => {
          return (
            <DocsCard dataSource={doc} key={doc._id} />
            // END OF MAP RETURN
          );
        })}
      </div>
    </GridContentLayout>
  );
}
