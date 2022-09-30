import React, { useState, useEffect } from "react";
import GlossaireService from "src/modules/Glossaire/GlossaireService";

// COMPONENTS
import Header from "./Header";
import Filter from "./Filter";
import GloassaireList from "./GloassaireList";
import LoadingData from "./shared/LoadingData";
import NoDataFound from "./shared/NoDataFound";
import Footer from "../Layout/Footer";

// Packages
var groupArray = require("group-array");

function Glossaire() {
  // state to hold a copy of the glossaire list (with all data)
  const [glossaireList, setGlossaireList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCHING initial data from DB
  const getGlossaire = () => {
    GlossaireService.getGloassaireList().then((gl) => {
      setGlossaireList(gl.rows);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getGlossaire();
  }, []);

  // passing grouped data (category)
  const [groupByCategory, setGroupByCategory] = useState(false);

  return (
    <>
      <div className='app__contenu'>
        <section className='contenu'>
          <Header />
          <Filter setGroupByCategory={setGroupByCategory} />
          {isLoading ? (
            <LoadingData />
          ) : (
            <section>
              {!glossaireList.length ? (
                <NoDataFound />
              ) : (
                <>
                  {groupByCategory ? (
                    <GloassaireList
                      data={groupArray(glossaireList, "categorie.titleFR")}
                      criteria='category'
                    />
                  ) : (
                    <GloassaireList data={glossaireList} criteria='letter' />
                  )}
                </>
              )}
            </section>
          )}
        </section>
      </div>
    </>
  );
}

export default Glossaire;
