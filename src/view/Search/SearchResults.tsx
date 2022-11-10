import React from 'react'
import styled from 'styled-components'
// COMPONENTS
import SRPCard from './SRPCard';
// ICONS
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export default function SearchResults() {
    return (
        <SRPLayout>
            <SRPHeader>
                <div>
                    <strong>53</strong>
                    <span>résultat pour cette recherche</span>
                </div>
                <div id='filterContainer'>
                    <span>Trier par</span>
                    <select name="filterBy" id="filterBySelect">
                        <option value="Date">Date</option>
                        <option value="az">Name A-Z</option>
                        <option value="za">Name Z-A</option>
                    </select>
                </div>
            </SRPHeader>

            <SRPData>
                <SRPCard />
                <SRPCard />
                <SRPCard />
                <SRPCard />
                <SRPCard />
                <SRPCard />
            </SRPData>

            <SRPFooter>
                <button className='pageSkipper prevSkipper'>
                    <MdNavigateBefore className='icon prev' />
                    Précédent
                </button>
                <div id="pagination">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <button className='pageSkipper nextSkipper'>
                    Suivant
                    <MdOutlineNavigateNext className='icon next' />
                </button>
            </SRPFooter>
        </SRPLayout>
    )
}


const SRPLayout = styled.div`
    margin-top: 1rem;
`;

const SRPHeader = styled.div`
    width: 100%;
    padding: 1rem 0;
    font-size: 14px;
    border-bottom: 1px solid #E0E0E0;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    div{
        strong{
            margin-right: .4rem;
        }
        span, strong{
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin-right: .5rem;
        }
    }

    #filterContainer{
        span{
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin-right: .5rem;
        }

        select{
            padding: .5rem;
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #2B2840;
        }
    }
`;

const SRPData = styled.div`
    width: 100%;
    margin: 1rem 0;
`;

const SRPFooter = styled.div`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        height: 35px;
        width: 100px;
        font-family: 'Proxima Nova';
        font-size: 12px;
        color: var(--violet);
        border: 1px solid #A3A3A9;
        background-color: transparent;

        &:hover{
            background-color: var(--violet);
            border: 1px solid var(--violet);
            color: #fff;
        }
        &:hover .icon{
            background-color: transparent;
        }
    }

    .pageSkipper{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .next{
            /* margin-left: .2rem; */
            font-size: 1.3rem;
        }
    }

    .prevSkipper{
        color: #A3A3A9;

        .prev{
            /* margin-right: .2rem; */
            font-size: 1.3rem;
            color: #A3A3A9;
        }
    }

    #pagination{
        margin: 0 .5rem;
        width: 150px;
        display: flex;
        justify-content: space-evenly;

        button{
            display: inline-block;
            height: 35px;
            min-width: fit-content;
            width: 40px;
        }
    }
`;