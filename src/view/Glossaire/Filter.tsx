import React, { useState } from 'react'
import FilterStyles from './styles/FilterStyles'

export default function Filter() {

    // current tab
    const [activeTab, setActiveTab] = useState(false);
    const toggleTabOnClick = _ => {
        setActiveTab(current => !current);

    }

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
                            here lies content of tab 001
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
            </FilterStyles>
        </div>
    )
}
