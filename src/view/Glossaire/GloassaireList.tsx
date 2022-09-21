import React, { useEffect, useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";

export default function GloassaireList({ data }) {

    // state to hold minified version of glossaire list (id, name) (less api calls)
    const initialState = { id: '', name: '' };
    const [sortedData, setSortedData] = useState([initialState]);

    useEffect(() => {
        console.log("data fetched from parent component :: ", data);

    }, [])


    return (
        <div>
            {/* LIST OF ENTRIES */}
            <section className="listOfEntries">
                <GlossaireSection>
                    <div className="sectionHeader">
                        <span>LETTER_GOES_HERE</span>
                    </div>
                    <section className="sectionBody">
                        <button className='glossaireLink'>GLOSS_NAME_HERE</button>
                        <button className='glossaireLink'>GLOSS_NAME_HERE</button>
                        <button className='glossaireLink'>GLOSS_NAME_HERE</button>
                    </section>
                </GlossaireSection>
            </section>
        </div>
    )
}
