import React, { useEffect, useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";

export default function GloassaireList({ data }) {

    // state to hold minified version of glossaire list (id, name) (less api calls)
    const initialStateEmptyObject = { id: '', name: '' };
    const [sortedGlossaireList, setSortedGlossaireList] = useState([initialStateEmptyObject]);




    return (
        <div>
            {/* LIST OF ENTRIES */}
            <section className="listOfEntries">
                <GlossaireSection>
                    <div className="sectionHeader">
                        <span>A</span>
                    </div>
                    <section className="sectionBody">
                        <p>AAAAAAAAAAAAAAAAAA</p>
                        <p>AAAAAAAAAAAAAAAAAA</p>
                        <p>AAAAAAAAAAAAAAAAAA</p>
                        <p>AAAAAAAAAAAAAAAAAA</p>
                        <p>AAAAAAAAAAAAAAAAAA</p>
                    </section>
                </GlossaireSection>
            </section>
        </div>
    )
}
