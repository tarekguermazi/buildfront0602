import React, { useContext, useEffect, useState } from "react";
import {
  Etudes,
  search__archeive,
} from "src/assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchService from "src/modules/Search/SearchService";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

function Archives() {

  // HANDLING SEARCH LOGIC
  const [archiveSearchString, setArchiveSearchString] = useState('');
  const [archiveFilter, setarchiveFilter] = useState('');

  const handleChange = event => {
    setArchiveSearchString(event.target.value);
  };

  const handleRadioChange = event => {
    setarchiveFilter(event.target.value);
  };

  const searchPath = {
    pathname: "/search",
    ARCHIVE_SEARCH_STRING: archiveSearchString,
    ARCHIVE_FILTER: archiveFilter
  };

  // DYNAMIC CATEGORY LIST
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [categoriesListIsLoading, setCategoriesListIsLoading] = useState(true);
  const getCategoriesList = () => {
    SearchService.getCategoriesList()
      .then(res => {
        setCategoriesListIsLoading(true);
        setCategoriesList(categoriesList => categoriesList.concat(res));
        setCategoriesListIsLoading(false);
      })
      .catch(err => { console.error(err) });
  };

  useEffect(() => {
    getCategoriesList();
  }, [])


  return (
    <>
      <Breadcrumb
        title={i18n("common.Archives")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Archives")]]}
      />
      <div className='app__archieve__page'>
        <div className='archeive'>
          <div className='archieve__content'>
            <div className='archieve__left'>
              <div className='left__search'>
                <input type='text' placeholder='Rechercher dans l’archive...' onChange={handleChange} value={archiveSearchString} />
                {
                  (archiveSearchString.length >= 1)
                    ?
                    <Link to={searchPath}>
                      <div className='button__search'>
                        <i className='fa-solid fa-magnifying-glass' />
                        Chercher
                      </div>
                    </Link>
                    :
                    <div className='button__search'>
                      <i className='fa-solid fa-magnifying-glass' />
                      Chercher
                    </div>
                }
                <div className='search__advanced'>Recherche avancée</div>
              </div>
              <div className='mobile__archeiveSearch'>
                <div className='archeiveSearch__form'>
                  <input
                    type='text'
                    placeholder='Rechercher dans l’archive...'
                  />
                  <div className='button_search'>
                    <img
                      className='lazyload'
                      src={search__archeive}
                      alt='Search Archeive ICon'
                      srcSet=''
                    />
                  </div>
                </div>
                <div className='search__advanced'>Recherche avancée</div>
              </div>
              <FilterLayout onChange={handleRadioChange}>
                {
                  (categoriesListIsLoading === false) &&
                  <>
                    <label className="filterArchiveContianer" htmlFor="all">
                      <input type="radio" name="archiveFilter" value="autre" id="all" />
                      <div className="contentContainer">
                        <div>
                          <img className='lazyload' src={Etudes} alt='Etudes Icon' />
                        </div>
                        <div>
                          <h4>Tous</h4>
                        </div>
                      </div>
                    </label>
                    {
                      (categoriesList.length >= 1) &&
                      <>
                        {
                          categoriesList[0]['rows'].map((category: any) => {
                            return (
                              <label className="filterArchiveContianer" htmlFor={category._id} key={category._id}>
                                <input type="radio" name="archiveFilter" value="etude" id={category._id} />
                                <div className="contentContainer">
                                  <div>
                                    <img className='lazyload' src={Etudes} alt='Etudes Icon' />
                                  </div>
                                  <div>
                                    <h4>{category.titleFR}</h4>
                                  </div>
                                </div>
                              </label>
                            )
                          })
                        }
                      </>
                    }
                  </>
                }
                {/* LOADING ... */}
                {
                  (categoriesListIsLoading === true) &&
                  <>
                    {[...Array(5)].map((x, i) =>
                      <Skeleton key={i} height={172} width={275} />
                    )}
                  </>
                }
              </FilterLayout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Archives;

const FilterLayout = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));


  .contentContainer{
    width: 275px;
    height: 172px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      margin-bottom: 2rem;
    }

    &:hover{
      cursor: pointer;
      background-color: #F7F7F7;
    }
  }

  input[type="radio"]{
    display: none;

    &:checked~.contentContainer{
      border: 1px solid #E1011A;
      h4{
        color: #E1011A;
      }
    }
  }

`;
