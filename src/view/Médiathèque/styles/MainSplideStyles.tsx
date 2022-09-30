import styled from 'styled-components';

const MainSplideStyles = styled.section`
    color: #fff;
    width: var(--cerntered-content);
    height: 507px;
    background-color: #000;

    .horizontalPlayer{
        width: 100% !important;
        height: 507px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        section{
            display: flex;
            align-items: center;
        }
        
        .cardThumbnail{
            width: 500px !important;
            height: 350px;
            background-size: cover;
            background-position: center;
            margin-right: 2rem;
        }
        .hasNoThumbnail{
            background-image: url('https://imgur.com/N1ZiTM4.jpeg');
        }

        .textContent{
            width: 450px;
            font-family: 'Bebas Neue Pro';
            line-height: 1.2;
            text-align: left;
            color: #fff;

            .horizontalPlayerTitle{
                font-size: 3rem;
            }
        }

        .dateAndType{
            display: block;
            margin-bottom: 2rem;

            span{
                color: #fff;
            }

            .contentType{
                width: 100px;
                height: 30px;
                border: 1px solid red;
                border-radius: .5rem;
                margin-bottom: 1rem;
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
                display: block;
                color: rgba(255, 255, 255, 1) !important;
                font-size: 1.2rem;
            }
        }
    }
`;

export default MainSplideStyles;