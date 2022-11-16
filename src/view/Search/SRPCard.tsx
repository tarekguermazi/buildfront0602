import React from 'react'
import styled from 'styled-components'

export default function SRPCard() {
    return (
        <CardLayout>
            <div className='cardDate'>13/09/2022</div>
            <div className='cardContent'>
                <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque.</strong>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae unde eaque, similique voluptate ducimus obcaecati ipsam et velit sapiente dolores repudiandae, delectus natus ratione ea inventore aliquam totam tenetur a fugit. Architecto natus soluta voluptate harum. Odio corrupti commodi dolor exercitationem debitis et rerum quibusdam consectetur reiciendis, excepturi provident! Ea.</p>
            </div>
            <div className='cardImage'></div>
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

    .cardDate{
        width: 100px;
        color: #A3A3A9;
    }

    .cardContent{
        width: 470px;

        strong{
            color: #2B2840;
            font-family: 'Bebas Neue Pro';
            font-style: normal;
            font-size: 20px;
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
        background-color: #878787;
        background-image: url(https://via.placeholder.com/270x175);
        background-size: cover;
        background-position: center;
    }
`;