import React from 'react'
import styled from 'styled-components'
import moment from 'moment';

// ICONS
import { BiMicrophone } from "react-icons/bi";

export default function AudioPlayer({ dataSource }) {
    // HELPER FUNCTIONS
    const pipeDate = date => {
        let d = date.split('T')[0];
        return moment(d).format('LL');
    };

    return (
        <AudioPlayerLayout key={dataSource._id} className="videoCardVertical">
            <div className="dateAndType">
                <div className="contentType">
                    <BiMicrophone className='icon' />
                    {dataSource.type}
                </div>
                <span className='contentDate'>
                    {pipeDate(dataSource.updatedAt)}
                </span>
            </div>
            <div className="verticalPlayerTitle">
                <span style={{ textTransform: "lowercase" }}>{dataSource.titleFR}</span>
            </div>
        </AudioPlayerLayout>
    )
}


const AudioPlayerLayout = styled.div`
    position: relative;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dateAndType{
        height: 30px;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
            color: #fff;
        }

        .contentType{
            width: 100px;
            border: 1px solid red;
            border-radius: .5rem;
            height: 30px;

            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 15px;
            color: red;
            padding: .3rem .5rem;
            
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .icon{
                margin-right: 5px;
            }
        }

        .contentDate{
            color: rgba(122, 122, 122, 1);
            font-size: 12px;
            font-family: 'Proxima Nova';
        }
    }

    .verticalPlayerTitle{
        margin-top: 1rem;
        height: 70px;

        span{
            width: 100%;
            font-family: 'Proxima Nova';
            text-transform: capitalize !important;
            line-height: 1.5;
            font-weight: 400;
            font-size: 1.2rem;
            color: var(--violet);

            overflow:hidden;
            display:inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;