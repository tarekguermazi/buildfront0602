import React from "react";
import GridContentLayout from "../styles/GridContentLayout";
import SectionHeader from "../shared/SectionHeader";
import DocsCard from "../shared/DocsCard";

export default function Docs({ docstList }) {
  return (
    <GridContentLayout>
      <div className='archieve__header'>
        <h2>Documentaire</h2>
        <div className='satestique__bar'></div>
      </div>
      <div style={{ marginBottom: "2.1875rem" }} />
      <div className='grid'>
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
