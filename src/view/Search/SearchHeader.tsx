import React from 'react'
import styled from 'styled-components'
import { IoSearchOutline } from 'react-icons/io5'

export default function SearchHeader() {
    return (
        <HeaderLayout>
            <form>
                <SearchBox>
                    <input type="text" />
                    <button type="submit">
                        <IoSearchOutline />
                        <span>Chercher</span>
                    </button>
                </SearchBox>
            </form>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.div``;
const SearchBox = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 .3rem;
    background-color: yellow;
    /* background-color: #F1F1F1; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input{
        background-color: green;
        font-size: 1rem;
        height: 50px;
        width: 100%;
        margin-right: 1rem;
        color: #000;
    }

    button{
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
`;
