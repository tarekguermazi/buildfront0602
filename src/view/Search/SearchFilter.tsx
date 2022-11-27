import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { SearchContext } from './SearchContext';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
// SERVICES
import SearchService from 'src/modules/Search/SearchService';

export default function SearchFilter() {

    // GLOBAL STATE
    const {
        setSRP,
        setIsLoading, searchString,
        publicationFilter, setpublicationFilter
    } = useContext(SearchContext);

    const handleFilterValueChange = event => {
        if (event.target.value === 'autre')
            setpublicationFilter('');
        else
            setpublicationFilter(event.target.value);

        setSRP([]);
        setIsLoading(true);
        SearchService.searchUsingMainCatefories(searchString, publicationFilter, 0)
            .then(res => {
                setSRP(SRP => SRP.concat(res));
                setIsLoading(false);
            })
    }

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
        <FilterLayout>
            {
                (categoriesListIsLoading === false) &&
                <div id="filterCategories" onChange={handleFilterValueChange}>
                    <label htmlFor="all">
                        <input type="radio" name="filterCat" value="autre" id="all" defaultChecked />
                        <span>tous</span>
                    </label>
                    {
                        (categoriesList.length >= 1) &&
                        <>
                            {
                                categoriesList[0]['rows'].map((category: any) => {
                                    return (
                                        <label htmlFor={category._id} key={category._id}>
                                            <input type="radio" name="filterCat" value={category.titleFR} id={category._id} />
                                            <span>{category.titleFR}</span>
                                        </label>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            }

            {/* SHOW THIS WHEN LOADING */}
            {
                (categoriesListIsLoading === true) &&
                <div className='LoadingFlex'>
                    {[...Array(5)].map((x, i) =>
                        <Skeleton key={i} height={60} width={150} />
                    )}
                </div>
            }
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

    .LoadingFlex{
        width: 100%;
        height: 70px;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
`;
