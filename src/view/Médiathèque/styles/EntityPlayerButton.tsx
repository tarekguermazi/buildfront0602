import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// ICONS
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export default function EntityPlayerButton({ data, entity }) {
    return (
        <div>
            {
                entity === 'main' &&
                <Link to={'/Mediatheque/entity/' + data._id}>
                    <DetailsButtonMainSPlide >
                        {
                            {
                                videos: (
                                    <BsFillPlayFill />
                                ),
                                autres: (
                                    <AiOutlineEye />
                                ),
                                documentaire: (
                                    <AiOutlineEye />
                                ),
                                photos: (
                                    <AiOutlineEye />
                                ),
                                podcast: (
                                    <AiOutlineEye />
                                )
                            }[data.type]
                        }
                    </DetailsButtonMainSPlide>
                </Link>
            }
            {
                entity === '' &&
                <Link to={'/Mediatheque/entity/' + data._id}>
                    <DetailsButton >
                        {
                            {
                                videos: (
                                    <BsFillPlayFill />
                                ),
                                autres: (
                                    <AiOutlineEye />
                                ),
                                documentaire: (
                                    <AiOutlineEye />
                                ),
                                photos: (
                                    <AiOutlineEye />
                                ),
                                podcast: (
                                    <AiOutlineEye />
                                )
                            }[data.type]
                        }
                    </DetailsButton>
                </Link>
            }
            {
                entity === 'mainGridPlayer' &&
                <Link to={'/Mediatheque/entity/' + data._id}>
                    <DetailsButtonMainGridPlayer >
                        {
                            {
                                videos: (
                                    <BsFillPlayFill />
                                ),
                                autres: (
                                    <AiOutlineEye />
                                ),
                                documentaire: (
                                    <AiOutlineEye />
                                ),
                                photos: (
                                    <AiOutlineEye />
                                ),
                                podcast: (
                                    <AiOutlineEye />
                                )
                            }[data.type]
                        }
                    </DetailsButtonMainGridPlayer>
                </Link>
            }
        </div>
    )
}


const DetailsButton = styled.div`
    height: 50px;
    width: 50px;
    font-size: 1.4rem;
    border-radius: 50%;
    color: red;
    background-color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 140px;
    left: 10px;
`;
const DetailsButtonMainSPlide = styled.div`
    height: 50px;
    width: 50px;
    font-size: 1.4rem;
    border-radius: 50%;
    color: red;
    background-color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 290px;
    left: 10px;
`;
const DetailsButtonMainGridPlayer = styled.div`
    height: 50px;
    width: 50px;
    font-size: 1.4rem;
    border-radius: 50%;
    color: red;
    background-color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 140px;
    left: 10px;
`;