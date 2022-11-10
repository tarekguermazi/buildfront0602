import React, { useState } from 'react'
import styled from 'styled-components'
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5'

export default function SearchHeader() {
    return (
        <HeaderLayout>
            <form>
                <SearchBox>
                    <input type="text" />
                    <button type='reset' id='resetButton'>
                        <IoCloseOutline />
                    </button>
                    <button type="submit" id='searchButton'>
                        <IoSearchOutline />
                        <span>Chercher</span>
                    </button>
                </SearchBox>
            </form>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.div`
    margin-top: 1rem;
`;

const SearchBox = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 .3rem;
    background-color: #F1F1F1;
    /* background-color: #F1F1F1; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    input{
        background-color: #F1F1F1;
        font-size: 1rem;
        height: 50px;
        width: 100%;
        margin-right: .5rem;
        color: #000;
        padding-left: 1rem;
    }

    #searchButton{
        height: 50px;
        padding: 0 1rem;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        background-color: red;

        display: flex;
        flex-direction: row;
        align-items: center;

        span{
            color: #fff;
            margin-left: .5rem;
        }
    }

    #resetButton{
        position: absolute;
        right: 11rem;
        font-size: 1.3rem;
        background-color: #E0E0E0;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
`;
