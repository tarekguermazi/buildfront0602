import styled from 'styled-components';

const NewContentStyles = styled.section`
    header{
        margin-bottom: 3rem;

        h1{
            width: 100%;
            font-size: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;

            &:after{
                content: '';
                display: inline-block;
                width: 90%;
                height: 3px;
                background-color: red;
            }
        }
    }

    main{
        width: 100%;
        position: relative;

        /* STYLING THE SPLIDE ARROWS ! */
        .splide__arrow{
            height: 35px;
            width: 35px;
            position: absolute;
            top: -80px;

            background-color: transparent;
            border: 1px solid var(--gray3);
            border-radius: .2rem;

            svg{
                fill: #fff;
            }
        }
        button{
            &:nth-child(1){
                position: relative;
                float: right;
                margin-right: 1rem;
            }
        }
        
        .VerticlPlayer{
            width: 350px !important;
            height: 330px !important;
            overflow: hidden;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .dardThumbnail{
                width: 100%;
                height: 200px;
                background-image: url('https://imgur.com/N1ZiTM4.jpeg');
                background-size: cover;
                background-position: center;
            }

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
                    color: rgba(255, 255, 255, 1);
                    font-size: 1.2rem;
                }
            }

            .verticalPlayerTitle{
                height: 70px;
                color: #fff;
                font-family: 'Bebas Neue Pro';
                font-weight: 400;
                font-size: 1.5rem;
                text-decoration: none;
                text-transform: lowercase !important;
            }
        }
    }
`;

export default NewContentStyles;