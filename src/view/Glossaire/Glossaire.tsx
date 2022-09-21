import React, { useState, useEffect } from "react";
import GlossaireService from 'src/modules/Glossaire/GlossaireService';

// COMPONENTS
import Header from "./Header";
import Filter from "./Filter";
import GloassaireList from "./GloassaireList";
import LoadingData from './shared/LoadingData';
import NoDataFound from './shared/NoDataFound';

// Packages
var arraySort = require('array-sort');

function Glossaire() {

  // state to hold a copy of the glossaire list (with all data)
  const [glossaireList, setGlossaireList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCHING initial data from DB
  const getGlossaire = () => {
    GlossaireService.getGloassaireList()
      .then(gl => {
        setGlossaireList(gl.rows);
        setIsLoading(false);
      })
  }
  useEffect(() => {
    getGlossaire();
  }, []);


  return (
    <div className='app__contenu'>
      <section className='contenu'>
        <Header />
        <Filter />

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
                  <GloassaireList data={arraySort(glossaireList, 'nomFR')} />
              }
            </section>
        }
      </section>
    </div>
  );
}

export default Glossaire;
