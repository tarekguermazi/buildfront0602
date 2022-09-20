import React, { useState, useRef, useEffect } from 'react'
import FilterStyles from './styles/FilterStyles'
import { Link } from 'react-scroll'

export default function Filter() {

    // current tab
    const [activeTab, setActiveTab] = useState(true);
    const toggleTabOnClick = _ => {
        setActiveTab(current => !current);
    }

    // dummy letters array to use as links
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
                            here lies content of tab 002
                            <br />
                            here lies content of tab 002
                        </div>
                    }

                    {/* end of tab content */}
                </div>
            </FilterStyles >
        </div >
    )
}
