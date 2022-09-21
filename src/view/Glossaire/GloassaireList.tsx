import React, { useEffect, useState } from 'react'
import GlossaireSection from "./styles/GlossaireSection";
import GlossaireService from 'src/modules/Glossaire/GlossaireService';

// COMPONENTS
import LoadingData from './shared/LoadingData';
import NoDataFound from './shared/NoDataFound';


export default function GloassaireList() {

    // state to hold a copy of the glossaire list (with all data)
    const [glossaireList, setGlossaireList] = useState([]);
    // state to hold minified version of glossaire list (id, name) (less api calls)
    const initialStateEmptyObject = { id: '', name: '' };
    const [sortedGlossaireList, setSortedGlossaireList] = useState([initialStateEmptyObject]);
    // handle the spinner thingy
    const [isLoading, setIsLoading] = useState(true);

    // FETCHING initial data from DB
    const getGlossaire = () => {
        GlossaireService.getGloassaireList()
            .then(gl => {
                console.log("USEEFFECT 00", gl.rows);
                setGlossaireList(gl.rows);
                setIsLoading(false);
            })
    }
    useEffect(() => {
        getGlossaire();
    }, []);


    return (
        <div>
            {/* LIST OF ENTRIES */}
            <section className="listOfEntries">
                {
                    isLoading
                        ?
                        <LoadingData />
                        :
                        <section>
                            {
                                !glossaireList.length
                                    ?
                                    <NoDataFound />
                                    :
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
                            }
                        </section>
                }
            </section>
        </div>
    )
}
