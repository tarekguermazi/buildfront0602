import React, { useState, useEffect } from 'react'
import FilterStyles from './styles/FilterStyles'
import { Link } from 'react-scroll'
import GlossaireService from 'src/modules/Glossaire/GlossaireService';

// ICONS
import { CgSmileNone } from 'react-icons/cg'
import { MdOutlineHourglassEmpty } from 'react-icons/md'

export default function Filter() {

    // current tab
    const [activeTab, setActiveTab] = useState(true);
    const toggleTabOnClick = _ => {
        setActiveTab(current => !current);
        if (activeTab) {
            setGetCategoriesTrigger(true);
        }
    }

    // dummy letters array to use as links
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // Glossaire ccategories
    const [glossaireCategories, setGlossaireCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // fetching category only if user switched tabs
    const [getCategoriesTrigger, setGetCategoriesTrigger] = useState(false);

    useEffect(() => {
        if (getCategoriesTrigger) {
            GlossaireService.getGloassaireCategories()
                .then(res => {
                    console.log(res);
                    setGlossaireCategories(res.rows);
                    setIsLoading(false);
                })
        }
    }, [getCategoriesTrigger])

    return (
        <div>
            {/* FILTER */}
            <FilterStyles>
                <div className="tabsHeader">
                    <button
                        className={activeTab ? 'active' : ''}
                        onClick={toggleTabOnClick}
                    >
                        Par lettre
                    </button>
                    <button
                        className={!activeTab ? 'active' : ''}
                        onClick={toggleTabOnClick}
                    >
                        Par catégorie
                    </button>
                </div>
                <div className="tabContent">

                    {
                        activeTab &&
                        <div className="tab letterTab">
                            {
                                letters.map(l => {
                                    return (
                                        <Link
                                            to={l}
                                            smooth={true}
                                            duration={300}
                                            key={l}
                                            className="letterLinkFilter"
                                        >
                                            {l.toUpperCase()}
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    }

                    {
                        !activeTab &&
                        <div className="tab categoryTab">
                            {
                                !isLoading
                                    ?
                                    <div>
                                        {
                                            glossaireCategories.length
                                                ?
                                                <section>
                                                    {
                                                        glossaireCategories.map(gc => {
                                                            return (
                                                                <button key={gc['id']} className='categoryLink'>{gc['titleFR']}</button>
                                                            )
                                                        })
                                                    }
                                                </section>
                                                :
                                                <p className='tabMessage'>
                                                    <CgSmileNone className='icon' />
                                                    <span>Aucune catégorie trouvée</span>
                                                </p>
                                        }
                                    </div>
                                    :
                                    <p className='tabMessage'>
                                        <MdOutlineHourglassEmpty className='icon loadingIcon' />
                                        <span>Chargement des catégories</span>
                                    </p>
                            }
                        </div>
                    }

                    {/* end of tab content */}
                </div>
            </FilterStyles >
        </div >
    )
}
