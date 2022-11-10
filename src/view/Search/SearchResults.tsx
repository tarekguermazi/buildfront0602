import React from 'react'
import styled from 'styled-components'
// COMPONENTS
import SRPCard from './SRPCard';

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