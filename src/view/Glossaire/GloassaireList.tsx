import React from 'react'
import GlossaireSection from "./styles/GlossaireSection";

export default function GloassaireList({ data, criteria }) {
    const categoriesList: any = Object.keys(data);

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
                                                        <button
                                                            className='glossaireLink'
                                                            key={GLOSS.id}
                                                        >
                                                            {GLOSS.nomFR}
                                                        </button>
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
