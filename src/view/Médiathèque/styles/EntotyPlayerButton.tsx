import React from 'react'
import styled from 'styled-components'

// ICONS
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export default function EntotyPlayerButton({ data }) {
    return (
        <DetailsButton >
            {
                {
                    videos: (
                        <BsFillPlayFill />
                    ),
                    autres: (
                        <AiOutlineEye />
                    ),
                }[data.type]
            }
        </DetailsButton>
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