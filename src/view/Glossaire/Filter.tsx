import React, { useState, useEffect } from "react";
import FilterStyles from "./styles/FilterStyles";
import { Link } from "react-scroll";
import GlossaireService from "src/modules/Glossaire/GlossaireService";

// COMPONENTS
import LoadingData from "./shared/LoadingData";
import NoDataFound from "./shared/NoDataFound";
import { i18n } from "../../i18n";
export default function Filter({ setGroupByCategory }) {
  // current tab
  const [activeTab, setActiveTab] = useState(true);
  const toggleTabOnClick = (_) => {
    setActiveTab((current) => !current);
    setGroupByCategory(false);
    if (activeTab) {
      setGetCategoriesTrigger(true);
      setGroupByCategory(true);
    }
  };
  const langue = localStorage.getItem("language");
  // dummy letters array to use as links
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arabicLetters = [
    "أ",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "ه",
    "و",
    "ي",
  ];
  // Glossaire ccategories
  const [glossaireCategories, setGlossaireCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // fetching category only if user switched tabs
  const [getCategoriesTrigger, setGetCategoriesTrigger] = useState(false);

  useEffect(() => {
    if (getCategoriesTrigger) {
      GlossaireService.getGloassaireCategories().then((res) => {
        setGlossaireCategories(res.rows);
        setIsLoading(false);
      });
    }
  }, [getCategoriesTrigger]);

  return (
    <div>
      {/* FILTER */}
      <FilterStyles>
        <div className='tabsHeader'>
          <button
            className={activeTab ? "active" : ""}
            onClick={toggleTabOnClick}>
            {i18n("common.lettre")}
          </button>
          <button
            className={!activeTab ? "active" : ""}
            onClick={toggleTabOnClick}>
            {i18n("common.category")}
          </button>
        </div>
        <div className='tabContent'>
          {langue === "ar" ? (
            <>
              {activeTab && (
                <div className='tab letterTab'>
                  {arabicLetters.map((l) => {
                    return (
                      <Link
                        to={l}
                        smooth={true}
                        duration={300}
                        key={l}
                        className='letterLinkFilter'>
                        {l}
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <>
              {activeTab && (
                <div className='tab letterTab'>
                  {letters.map((l) => {
                    return (
                      <Link
                        to={l}
                        smooth={true}
                        duration={300}
                        key={l}
                        className='letterLinkFilter'>
                        {l.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {!activeTab && (
            <div className='tab categoryTab'>
              {!isLoading ? (
                <div>
                  {glossaireCategories.length ? (
                    <section style={{ display: "grid" }}>
                      {glossaireCategories.map((gc) => {
                        return (
                          <Link
                            to={
                              langue === "fr"
                                ? gc["titleFR"]
                                : langue === "ar"
                                ? gc["titleAR"]
                                : gc["titleEN"]
                            }
                            smooth={true}
                            duration={300}
                            key={gc["id"]}
                            className='categoryLink'>
                            {langue === "fr"
                              ? gc["titleFR"]
                              : langue === "ar"
                              ? gc["titleAR"]
                              : gc["titleEN"]}
                          </Link>
                        );
                      })}
                    </section>
                  ) : (
                    <NoDataFound />
                  )}
                </div>
              ) : (
                <LoadingData />
              )}
            </div>
          )}

          {/* end of tab content */}
        </div>
      </FilterStyles>
    </div>
  );
}
