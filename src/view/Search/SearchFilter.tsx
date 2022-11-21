import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { SearchContext } from './SearchContext';

export default function SearchFilter() {

    // GLOBAL STATE
    const { setpublicationFilter } = useContext(SearchContext);
    const handleFilterValueChange = event => {
        if (event.target.value === 'autre')
            setpublicationFilter('');
        else
            setpublicationFilter(event.target.value);
    }

    return (
        <FilterLayout>
            <div id="filterCategories" onChange={handleFilterValueChange}>
                <label htmlFor="all">
                    <input type="radio" name="filterCat" value="autre" id="all" defaultChecked />
                    <span>Tous</span>
                </label>
                <label htmlFor="donneNumerique">
                    <input type="radio" name="filterCat" value="données numériques" id="donneNumerique" />
                    <span>Données numériques</span>
                </label>
                <label htmlFor="manifestation">
                    <input type="radio" name="filterCat" value="Manifestation" id="manifestation" />
                    <span>manifestation</span>
                </label>
                <label htmlFor="articleScientifique">
                    <input type="radio" name="filterCat" value="article scientifique" id="articleScientifique" />
                    <span>article scientifique</span>
                </label>
                <label htmlFor="articleJournalistique">
                    <input type="radio" name="filterCat" value="article journalistique" id="articleJournalistique" />
                    <span>article journalistique</span>
                </label>
                <label htmlFor="rapport">
                    <input type="radio" name="filterCat" value="rapport" id="rapport" />
                    <span>rapport</span>
                </label>
                <label htmlFor="entretien">
                    <input type="radio" name="filterCat" value="entretien" id="entretien" />
                    <span>entretien</span>
                </label>
            </div>
        </FilterLayout>
    )
}


const FilterLayout = styled.div`
    display: block;
    margin-top: 1rem;

    #filterCategories{
        width: 100%;
        height: 60px;
        padding: 0 4rem;
        display: flex;
        align-items:center;
        justify-content: space-around;

        input{
            display: none;
            &:checked+span {
                opacity: 1;
                background-color: var(--violet);
                color: #fff;
                border-color: var(--violet);
            }
        }

        label{
            display: inline-block;
            margin-right: 1rem;
            span{
                font-family: 'Bebas Neue';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                text-transform: uppercase;
                color: #2B2840;
                opacity: .5;

                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 100px;
                height: 48px;
                padding: 0 1rem;
                border: 2px solid #F1F1F1;
                
                &:hover{
                    opacity: 1;
                    background-color: var(--violet);
                    color: #fff;
                    border-color: var(--violet);
                }
            }
        }
    }
`;
