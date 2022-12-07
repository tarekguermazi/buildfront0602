import React from 'react'
import styled from 'styled-components'

export default function DocsCard({ dataSource }) {
    return (
        <DocsCardLayout>
            {
                (dataSource.photos?.length > 0)
                    ? <div
                        className="cardThumbnail"
                        style={{ background: "linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url(" + dataSource.photos[0].downloadUrl + ")", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="cardTitle">
                            <span style={{ textTransform: "lowercase" }}>{dataSource.titleFR}</span>
                        </div>
                    </div>
                    : <div className="cardThumbnail hasNoThumbnail">
                        <div className="cardTitle">
                            <span style={{ textTransform: "lowercase" }}>{dataSource.titleFR}</span>
                        </div>
                    </div>
            }
        </DocsCardLayout>
    )
}

const DocsCardLayout = styled.div`
    height: 200px !important;
    
    .cardThumbnail{
        width: 100%;
        height: 200px;
        padding: 1rem;
        display: flex;
        align-items: flex-end;
    }
    .hasNoThumbnail{
        background: linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url('https://imgur.com/N1ZiTM4.jpeg');
        background-size: cover;
        background-position: center;
    }


    .cardTitle{
        span{
            width: 100%;
            font-family: 'Proxima Nova';
            text-transform: capitalize !important;
            line-height: 1.5;
            font-weight: 400;
            font-size: 1.2rem;
            color: #E7E3FF;

            /* overflow:hidden;
            display:inline-block;
            text-overflow: ellipsis;
            white-space: nowrap; */
        }
    }
`;
