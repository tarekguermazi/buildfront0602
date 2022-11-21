import React, { useState } from "react";
import {
  Communique,
  Etudes,
  rapport,
  search__archeive,
  invitation,
  petition,
  Poster,
} from "src/assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Archives() {

  // HANDLING SEARCH LOGIC
  const [archiveSearchString, setArchiveSearchString] = useState('');
  const handleChange = event => {
    setArchiveSearchString(event.target.value);
  };
  const searchPath = {
    pathname: "/search",
    ARCHIVE_SEARCH_STRING: archiveSearchString
  };


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
              <FilterLayout>
                {/* ETUDE */}
                <label className="filterArchiveContianer" htmlFor="etude">
                  <input type="radio" name="archiveFilter" value="etude" id="etude" />
                  <div className="contentContainer">
                    <div>
                      <img className='lazyload' src={Etudes} alt='Etudes Icon' />
                    </div>
                    <div>
                      <h4>études</h4>
                    </div>
                  </div>
                </label>
                {/* RAPPORT */}
                <label className="filterArchiveContianer" htmlFor="rapport">
                  <input type="radio" name="archiveFilter" value="rapport" id="rapport" />
                  <div className="contentContainer">
                    <div>
                      <img
                        className='lazyload'
                        src={rapport}
                        alt='Rapport ICon'
                      />
                    </div>
                    <div>
                      <h4>Rapports</h4>
                    </div>
                  </div>
                </label>
                {/* INVIRATION */}
                <label className="filterArchiveContianer" htmlFor="invitatino">
                  <input type="radio" name="archiveFilter" value="invitatino" id="invitatino" />
                  <div className="contentContainer">
                    <div>
                      <img
                        className='lazyload'
                        src={invitation}
                        alt='invitation ICon'
                      />
                    </div>
                    <div>
                      <h4>Invitations</h4>
                    </div>
                  </div>
                </label>
                {/* COMMUNIQUES */}
                <label className="filterArchiveContianer" htmlFor="communique">
                  <input type="radio" name="archiveFilter" value="communique" id="communique" />
                  <div className="contentContainer">
                    <div>
                      <img
                        className='lazyload'
                        src={Communique}
                        alt='Communique Png'
                      />
                    </div>
                    <div>
                      <h4>Communiqués</h4>
                    </div>
                  </div>
                </label>
                {/* PETITION */}
                <label className="filterArchiveContianer" htmlFor="petition">
                  <input type="radio" name="archiveFilter" value="petition" id="petition" />
                  <div className="contentContainer">
                    <div>
                      <img
                        className='lazyload'
                        src={petition}
                        alt='Petition Icon'
                      />
                    </div>
                    <div>
                      <h4>Pétitions</h4>
                    </div>
                  </div>
                </label>
                {/* POSTERS */}
                <label className="filterArchiveContianer" htmlFor="poster">
                  <input type="radio" name="archiveFilter" value="poster" id="poster" />
                  <div className="contentContainer">
                    <div>
                      <img className='lazyload' src={Poster} alt='Poster Icon' />
                    </div>
                    <div>
                      <h4>Posters</h4>
                    </div>
                  </div>
                </label>
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
