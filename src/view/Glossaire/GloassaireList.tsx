import React, { useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";
import Modal from 'react-modal'
import ModalHeader from './Modal/ModalHeader';
import ModalLabel from './Modal/ModalLabel';

export default function GloassaireList({ data, criteria }) {
    const categoriesList: any = Object.keys(data);
    const [isShowing, setIsShowing] = useState(false)

    Modal.setAppElement('#root');

    return (
        <div>
            {/* LIST OF ENTRIES */}
            <section className="listOfEntries">
                {
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
                                                                onClick={() => setIsShowing(true)}
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
                                                                        width: '570px',
                                                                        height: '500px',
                                                                        margin: 'auto',
                                                                        padding: '2rem',
                                                                        fontFamily: 'Proxima Nova',
                                                                        color: 'var(--violet)',
                                                                        textAlign: 'justify'
                                                                    }
                                                                }}
                                                            >
                                                                <ModalHeader title={GLOSS.nomFR} setIsShowing={setIsShowing} />
                                                                <ModalLabel label={CAT} />
                                                                <p>{GLOSS.definitionFR}</p>
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
