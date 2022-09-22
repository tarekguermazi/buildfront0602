import React, { useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";
import _ from 'lodash';
// MODAL
import Modal from 'react-modal'
import ModalHeader from './Modal/ModalHeader';
import ModalLabel from './Modal/ModalLabel';

// PACKAGES
var arraySort = require('array-sort');
var groupArray = require('group-array');

export default function GloassaireList({ data, criteria }) {
    // HELPER FUNCTION(S)
    const initial = text => { return _.capitalize(text.charAt(0)); }

    // ### LETTER TAB LOGIC ###
    let arrayOfData: any[] = [];

    if (criteria === "letter") {
        data.forEach(GLOSSOBJECT => {
            arrayOfData.push({
                letter: initial(GLOSSOBJECT.nomFR),
                data: GLOSSOBJECT
            })
        });
        arrayOfData = groupArray(arraySort(arrayOfData, 'letter'), 'letter');
    }
    const initialsList: any = Object.keys(arrayOfData);


    // ### CATEGORY TAB LOGIC ###
    const categoriesList: any = Object.keys(data);
    const [isShowing, setIsShowing] = useState(false)

    Modal.setAppElement('#root');
    const [modalData, setModalData] = useState([{ nomFR: '', definitionFR: '', categorie: { titleFR: '' } }]);
    const [modalDataLetter, setModalDataLetter] = useState([{ data: { nomFR: '', definitionFR: '', categorie: { titleFR: '' } } }]);
    const handleClick = (CAT, ID) => {
        setIsShowing(true);
        if (criteria === 'category') {
            const modalData = data[CAT].filter(glossaireObject => {
                return glossaireObject.id === ID;
            });
            if (modalData.length > 0) {
                setModalData(modalData);
            }
        } else {
            const modalDataLetter = arrayOfData[CAT].filter(glossaireObject => {
                return glossaireObject.data._id === ID;
            });
            if (modalDataLetter.length > 0) {
                setModalDataLetter(modalDataLetter);
            }
        }
    }

    return (
        <div>
            {/* LIST OF ENTRIES */}
            <section className="listOfEntries">
                {
                    // ============ CATEGORY TAB ============
                    criteria === "category" &&
                    <div>
                        {
                            categoriesList.map(CAT => {
                                const glossList = data[CAT];
                                return (
                                    <GlossaireSection
                                        key={CAT}
                                        id={CAT}
                                    >
                                        <div className="sectionHeader">
                                            <span>{CAT}</span>
                                        </div>
                                        <section className="sectionBody">
                                            {
                                                glossList.map(GLOSS => {
                                                    return (
                                                        <section key={GLOSS.id}>
                                                            <button
                                                                className='glossaireLink'
                                                                onClick={() => handleClick(CAT, GLOSS.id)}
                                                            >
                                                                {GLOSS.nomFR}
                                                            </button>

                                                            <Modal
                                                                isOpen={isShowing}
                                                                onRequestClose={() => setIsShowing(false)}
                                                                style={{
                                                                    overlay: {
                                                                        backgroundColor: 'rgba(43, 40, 64, 0.5)'
                                                                    },
                                                                    content: {
                                                                        width: '700px',
                                                                        height: '500px',
                                                                        margin: 'auto',
                                                                        padding: '3.5rem',
                                                                        fontFamily: 'Proxima Nova',
                                                                        textAlign: 'justify',
                                                                        color: 'var(--violet)'
                                                                    }
                                                                }}
                                                            >
                                                                <ModalHeader title={modalData[0]['nomFR']} setIsShowing={setIsShowing} />
                                                                <ModalLabel label={modalData[0]['categorie'].titleFR} />
                                                                <p>{modalData[0]['definitionFR']}</p>
                                                            </Modal>
                                                        </section>
                                                    )
                                                })
                                            }
                                        </section>
                                    </GlossaireSection>
                                )
                            })
                        }
                    </div>
                }

                {/* RENDERING DATA BASED ON FILTER */}

                {
                    // ============ LETTER TAB ============
                    criteria !== "category" &&
                    <div>
                        {
                            initialsList.map(GLOSSAIREINITIAL => {
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
                                            {
                                                glossList.map(ENTRY => {
                                                    return (
                                                        <section key={ENTRY.data.id}>
                                                            <button
                                                                className='glossaireLink'
                                                                onClick={() => handleClick(GLOSSAIREINITIAL, ENTRY.data.id)}
                                                            >
                                                                {ENTRY.data.nomFR}
                                                            </button>

                                                            <Modal
                                                                isOpen={isShowing}
                                                                onRequestClose={() => setIsShowing(false)}
                                                                style={{
                                                                    overlay: {
                                                                        backgroundColor: 'rgba(43, 40, 64, 0.5)'
                                                                    },
                                                                    content: {
                                                                        width: '700px',
                                                                        height: '500px',
                                                                        margin: 'auto',
                                                                        padding: '3.5rem',
                                                                        fontFamily: 'Proxima Nova',
                                                                        textAlign: 'justify',
                                                                        color: 'var(--violet)'
                                                                    }
                                                                }}
                                                            >
                                                                <ModalHeader title={modalDataLetter[0]['data']['nomFR']} setIsShowing={setIsShowing} />
                                                                <ModalLabel label={modalDataLetter[0]['data']['categorie'].titleFR} />
                                                                <p>{modalDataLetter[0]['data']['definitionFR']}</p>
                                                            </Modal>
                                                        </section>
                                                    )
                                                })
                                            }
                                        </section>
                                    </GlossaireSection>
                                )
                            })
                        }
                    </div>
                }
            </section>
        </div>
    )
}
