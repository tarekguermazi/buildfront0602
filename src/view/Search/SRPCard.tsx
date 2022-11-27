import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import parse from 'html-react-parser';
import moment from 'moment';

export default function SRPCard({ _id, date, content, thumbnail }) {
    const formattedDate = moment(date).format('l');
    console.log('USING THIS ID ::::: ', JSON.stringify(_id), typeof (JSON.stringify(_id)));

    return (
        <CardLayout>
            <div className='cardDate'>{formattedDate}</div>
            <div className='cardContent'>
                <strong>TITLE HERE</strong>
                {/* <Link to={'/publication/' + _id.toString()}><strong>TITLE HERE</strong></Link> */}
                {parse(content)}
            </div>
            <div className='cardImage' style={{ backgroundImage: "url(" + thumbnail + ")" }}></div>
        </CardLayout>
    )
}

const CardLayout = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    font-family: 'Bebas Neue Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    border-top: 1px solid #E0E0E0;
    padding-top: 1rem;

    .cardDate{
        width: 100px;
        color: #A3A3A9;
    }

    .cardContent{
        width: 470px;
        height: 100px;
        overflow-y: hidden;

        strong{
            color: #2B2840;
            font-family: 'Bebas Neue Pro';
            font-style: normal;
            font-size: 20px;

            &:hover{
                text-decoration: underline;
            }
        }

        p{
            margin-top: .3rem;
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 25px;
            color: #4F4F4F;
            text-align: justify;
        }
    }

    .cardImage{
        width: 270px;
        height: 175px;
        background-size: cover;
        background-position: center;
    }

`;