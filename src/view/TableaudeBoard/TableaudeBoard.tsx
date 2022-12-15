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

      <div className='tableaudeboard__'>
        <div className='archieve__header'>
          <h2> Mouvements sociaux :</h2>
          <div className='satestique__bar'></div>
        </div>
      </div>

      <div className='tableaudeboard__'>
        <div className='archieve__header'>
          <h2>Suicides</h2>
          <div className='satestique__bar'></div>
        </div>
      </div>

      <div className='tableaudeboard__'>
        <div className='archieve__header'>
          <h2>Migration</h2>
          <div className='satestique__bar'></div>
        </div>
      </div>
    </div>
  );
}

export default TableaudeBoard;
