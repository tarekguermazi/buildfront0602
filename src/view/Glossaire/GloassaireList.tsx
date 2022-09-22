import React, { useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";

// MODAL
import Modal from 'react-modal'
import ModalHeader from './Modal/ModalHeader';
import ModalLabel from './Modal/ModalLabel';

export default function GloassaireList({ data, criteria }) {
    const categoriesList: any = Object.keys(data);
    const [isShowing, setIsShowing] = useState(false)

    Modal.setAppElement('#root');
    const [modalData, setModalData] = useState([{ nomFR: '', definitionFR: '', categorie: { titleFR: '' } }])
    const handleClick = (CAT, ID) => {
        setIsShowing(true);
        if (criteria === 'category') {
            const modalData = data[CAT].filter(glossaireObject => {
                return glossaireObject.id === ID;
            });
            if (modalData.length > 0) {
                setModalData(modalData);
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
                        <h1>LETTER DATA HERE !!</h1>
                    </div>
                }
            </section>
        </div>
    )
}
