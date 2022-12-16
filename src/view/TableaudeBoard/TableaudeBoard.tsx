import React from "react";
import { calendar__bttom } from "../../assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";

function TableaudeBoard() {
  return (
    <div className='app__tableaudeboard'>
      <div className='app__calendar'>
        <img src={calendar__bttom} alt='' />
      </div>
      <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.publication.label")],
        ]}
      />
      {Array.from({ length: 3 }).map((item) => (
        <div className='tableaudeboard__'>
          <div className='archieve__header'>
            <h2> Mouvements sociaux :</h2>
            <div className='satestique__bar'></div>
          </div>

          <iframe
            title='Actions&Suicides'
            width='100%'
            height='600'
            allowFullScreen
            src='https://app.powerbi.com/view?r=eyJrIjoiNTE2MmQ0MTYtYmY4MS00MmJmLWJjNDctYzRlM2E4YmMyMzllIiwidCI6IjJhZGE1ZThlLWI4ZmUtNDU5Ni1iYmEzLTc4OGZkNGI0NzVmNSJ9&pageName=ReportSection3f576923d0890f593171'></iframe>
        </div>
      ))}
    </div>
  );
}

export default TableaudeBoard;
