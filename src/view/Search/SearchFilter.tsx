import React from 'react'
import styled from 'styled-components'

export default function SearchFilter() {
    return (
        <FilterLayout>
            <div id="filterCategories">
                <label htmlFor="all">
                    <input type="radio" name="filterCat" value="all" id="all" />
                    <span>Tous</span>
                </label>
                <label htmlFor="articles">
                    <input type="radio" name="filterCat" value="articles" id="articles" />
                    <span>Articles</span>
                </label>
                <label htmlFor="communiques">
                    <input type="radio" name="filterCat" value="communiques" id="communiques" />
                    <span>communiqués</span>
                </label>
                <label htmlFor="evenements">
                    <input type="radio" name="filterCat" value="evenements" id="evenements" />
                    <span>evenements</span>
                </label>
                <label htmlFor="photos">
                    <input type="radio" name="filterCat" value="photos" id="photos" />
                    <span>photos</span>
                </label>
                <label htmlFor="videos">
                    <input type="radio" name="filterCat" value="videos" id="videos" />
                    <span>videos</span>
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
        display: flex;
        align-items:center;
        justify-content: center;

        input{
            display: none;
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
                height: 40px;
                padding: 0 .5rem;
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
