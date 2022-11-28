import React, { useState } from "react";
import { Link } from 'react-router-dom';
import GlossaireSection from "./styles/GlossaireSection";
import _ from "lodash";

// PACKAGES
var arraySort = require("array-sort");
var groupArray = require("group-array");

export default function GloassaireList({ data, criteria }) {
  // HELPER FUNCTION(S)
  const initial = (text) => {
    return _.capitalize(text?.substring(0, 1));
  };

  // ### LETTER TAB LOGIC ###
  let arrayOfData: any[] = [];

  if (criteria === "letter") {
    data.forEach((GLOSSOBJECT) => {
      arrayOfData.push({
        letter: initial(GLOSSOBJECT.nomFR),
        data: GLOSSOBJECT,
      });
    });
    arrayOfData = groupArray(arraySort(arrayOfData, "letter"), "letter");
  }
  const initialsList: any = Object.keys(arrayOfData);

  // ### CATEGORY TAB LOGIC ###
  const categoriesList: any = Object.keys(data);

  return (
    <div>
      {/* LIST OF ENTRIES */}
      <section className='listOfEntries'>
        {
          // ============ CATEGORY TAB ============
          criteria === "category" && (
            <div>
              {categoriesList.map((CAT) => {
                const glossList = data[CAT];
                return (
                  <GlossaireSection key={CAT} id={CAT}>
                    <div className='sectionHeader'>
                      <span>{CAT}</span>
                    </div>
                    <section className='sectionBody'>
                      {glossList.map((GLOSS) => {
                        return (
                          <section key={GLOSS.id}>
                            <Link className='glossaireLink' to={'/Glossaire/' + GLOSS.id}>
                              {GLOSS.nomFR}
                            </Link>
                          </section>
                        );
                      })}
                    </section>
                  </GlossaireSection>
                );
              })}
            </div>
          )
        }

        {/* RENDERING DATA BASED ON FILTER */}

        {
          // ============ LETTER TAB ============
          criteria !== "category" && (
            <div>
              {initialsList.map((GLOSSAIREINITIAL) => {
                const glossList = arrayOfData[GLOSSAIREINITIAL];
                return (
                  <GlossaireSection
                    key={GLOSSAIREINITIAL}
                    id={GLOSSAIREINITIAL}>
                    <div className='sectionHeader'>
                      <span>{GLOSSAIREINITIAL}</span>
                    </div>
                    <section className='sectionBody'>
                      {glossList.map((ENTRY) => {
                        return (
                          <section key={ENTRY.data.id}>
                            <Link className='glossaireLink' to={'/Glossaire/' + ENTRY.data.id}>
                              {ENTRY.data.nomFR}
                            </Link>
                          </section>
                        );
                      })}
                    </section>
                  </GlossaireSection>
                );
              })}
            </div>
          )
        }
      </section>
    </div>
  );
}
