import React, { useState } from "react";
import GlossaireSection from "./styles/GlossaireSection";
import _ from "lodash";
// MODAL
import Modal from "react-modal";
import ModalHeader from "./Modal/ModalHeader";
import ModalLabel from "./Modal/ModalLabel";

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
  const langue = localStorage.getItem("language");

  if (criteria === "letter") {
    if (langue === "fr") {
      data.forEach((GLOSSOBJECT) => {
        arrayOfData.push({
          letter: initial(GLOSSOBJECT.nomFR),
          data: GLOSSOBJECT,
        });
      });
      arrayOfData = groupArray(arraySort(arrayOfData, "letter"), "letter");
    } else if (langue === "en") {
      data.forEach((GLOSSOBJECT) => {
        arrayOfData.push({
          letter: initial(GLOSSOBJECT.nomEN),
          data: GLOSSOBJECT,
        });
      });
      arrayOfData = groupArray(arraySort(arrayOfData, "letter"), "letter");
    }
    if (langue === "ar") {
      data.forEach((GLOSSOBJECT) => {
        arrayOfData.push({
          letter: initial(GLOSSOBJECT.nomAR),
          data: GLOSSOBJECT,
        });
      });
      arrayOfData = groupArray(arraySort(arrayOfData, "letter"), "letter");
    }
  }
  const initialsList: any = Object.keys(arrayOfData);

  // ### CATEGORY TAB LOGIC ###
  const categoriesList: any = Object.keys(data);
  const [isShowing, setIsShowing] = useState(false);

  Modal.setAppElement("#root");
  const [modalData, setModalData] = useState([
    {
      nomFR: "",
      nomAR: "",
      nomEN: "",
      definitionFR: "",
      definitionAR: "",
      definitionEN: "",
      categorie: { titleFR: "", titleAR: "", titleEN: "" },
    },
  ]);
  const [modalDataLetter, setModalDataLetter] = useState([
    {
      data: {
        nomFR: "",
        nomAR: "",
        nomEN: "",
        definitionFR: "",
        definitionAR: "",
        definitionEN: "",
        categorie: { titleFR: "", titleAR: "", titleEN: "" },
      },
    },
  ]);
  const handleClick = (CAT, ID) => {
    setIsShowing(true);
    if (criteria === "category") {
      const modalData = data[CAT].filter((glossaireObject) => {
        return glossaireObject.id === ID;
      });
      if (modalData.length > 0) {
        setModalData(modalData);
      }
    } else {
      const modalDataLetter = arrayOfData[CAT].filter((glossaireObject) => {
        return glossaireObject.data._id === ID;
      });
      if (modalDataLetter.length > 0) {
        setModalDataLetter(modalDataLetter);
      }
    }
  };

  return (
    <div>
      {/* LIST OF ENTRIES */}
      <section className="listOfEntries">
        {
          // ============ CATEGORY TAB ============
          criteria === "category" && (
            <div>
              {categoriesList.map((CAT) => {
                const glossList = data[CAT];
                return (
                  <GlossaireSection key={CAT} id={CAT}>
                    <div className="sectionHeader">
                      <span>{CAT}</span>
                    </div>
                    <section className="sectionBody">
                      {glossList.map((GLOSS) => {
                        return (
                          <section key={GLOSS.id}>
                            <button
                              className="glossaireLink"
                              onClick={() => handleClick(CAT, GLOSS.id)}
                            >
                              {langue === "fr"
                                ? GLOSS.nomFR
                                : langue === "ar"
                                ? GLOSS.nomAR
                                : GLOSS.nomEN}
                            </button>

                            <Modal
                              isOpen={isShowing}
                              onRequestClose={() => setIsShowing(false)}
                              style={{
                                overlay: {
                                  backgroundColor: "rgba(43, 40, 64, 0.5)",
                                },
                                content: {
                                  width: "700px",
                                  height: "500px",
                                  margin: "auto",
                                  padding: "3.5rem",
                                  fontFamily: "Proxima Nova",
                                  textAlign: "justify",
                                  color: "var(--violet)",
                                },
                              }}
                            >
                              <ModalHeader
                                title={
                                  langue === "fr"
                                    ? modalData[0]["nomFR"]
                                    : langue === "ar"
                                    ? modalData[0]["nomAR"]
                                    : modalData[0]["nomEN"]
                                }
                                setIsShowing={setIsShowing}
                              />
                              <ModalLabel
                                label={
                                  langue === "fr"
                                    ? modalData[0]["categorie"].titleFR
                                    : langue === "ar"
                                    ? modalData[0]["categorie"].titleAR
                                    : modalData[0]["categorie"].titleEN
                                }
                              />
                              <p>
                                {langue === "fr"
                                  ? modalData[0]["definitionFR"]
                                  : langue === "ar"
                                  ? modalData[0]["definitionAR"]
                                  : modalData[0]["definitionEN"]}
                              </p>
                            </Modal>
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
                    id={GLOSSAIREINITIAL}
                  >
                    <div className="sectionHeader">
                      <span>{GLOSSAIREINITIAL}</span>
                    </div>
                    <section className="sectionBody">
                      {glossList.map((ENTRY) => {
                        return (
                          <section key={ENTRY.data.id}>
                            <button
                              className="glossaireLink"
                              onClick={() =>
                                handleClick(GLOSSAIREINITIAL, ENTRY.data.id)
                              }
                            >
                              {langue === "fr"
                                ? ENTRY.data.nomFR
                                : langue === "ar"
                                ? ENTRY.data.nomAR
                                : ENTRY.data.nomEN}
                            </button>

                            <Modal
                              isOpen={isShowing}
                              onRequestClose={() => setIsShowing(false)}
                              style={{
                                overlay: {
                                  backgroundColor: "rgba(43, 40, 64, 0.5)",
                                },
                                content: {
                                  width: "700px",
                                  height: "500px",
                                  margin: "auto",
                                  padding: "3.5rem",
                                  fontFamily: "Proxima Nova",
                                  textAlign: "justify",
                                  color: "var(--violet)",
                                },
                              }}
                            >
                              <ModalHeader
                                title={
                                  langue === "fr"
                                    ? modalDataLetter[0]["data"]["nomFR"]
                                    : langue === "ar"
                                    ? modalDataLetter[0]["data"]["nomAR"]
                                    : modalDataLetter[0]["data"]["nomEN"]
                                }
                                setIsShowing={setIsShowing}
                              />
                              <ModalLabel
                                label={
                                  langue === "fr"
                                    ? modalDataLetter[0]["data"]["categorie"]
                                        .titleFR
                                    : langue === "ar"
                                    ? modalDataLetter[0]["data"]["categorie"]
                                        .titleAR
                                    : modalDataLetter[0]["data"]["categorie"]
                                        .titleEN
                                }
                              />
                              <p>
                                {langue === "fr"
                                  ? modalDataLetter[0]["data"]["definitionFR"]
                                  : langue === "ar"
                                  ? modalDataLetter[0]["data"]["definitionAR"]
                                  : modalDataLetter[0]["data"]["definitionEN"]}
                              </p>
                            </Modal>
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
