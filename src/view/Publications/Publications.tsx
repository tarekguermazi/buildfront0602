import React from "react";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { i18n } from "../../i18n";

function Publications() {
  return (
    <div className='app__publication'>
      {" "}
      <Breadcrumb
        title={i18n("entities.publication.label")}
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.publication.label")],
        ]}
      />
    </div>
  );
}

export default Publications;
