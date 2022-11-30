import React from 'react'
import styled from 'styled-components'
// ICONS
import { BiMailSend } from 'react-icons/bi';

export default function FormBody({ userType }) {
    return (
        <BodyLayout>
            <h3>{userType}</h3>

            <form>
                <div>
                    <label htmlFor="contacttype">Contatct</label>
                    <select id='contacttype'>
                        <option value="--">--</option>
                        <option value="contact">contact</option>
                        <option value="question">question</option>
                        <option value="problem">problem</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="problemInput">Problème d'inscription</label>
                    <textarea id="problemInput" cols={30} rows={10}></textarea>
                </div>

                <button type="submit" className='sendButton'>
                    <BiMailSend className='icon' />
                    Send
                </button>
            </form>
        </BodyLayout>
    )
}


const BodyLayout = styled.section`
    width: 700px;
    background-color: #fff;
    padding-top: 1rem;
    border-top: 2px solid #E1011A;

    h3{
        font-family: "Proxima Nova";
        text-transform: capitalize;
        color: var(--violet);
    }
    p{
        margin-top: 1rem;
        font-family: "Proxima Nova";
        font-size: 1rem;
        line-height: 1.5;
        color: var(--violet);
    }

    form{
        font-family: "Proxima Nova";
        font-size: 1rem;
        line-height: 1.5;
        color: var(--violet);

        label{
            font-size: 1.1rem;
            font-weight: bold;
            display: block;
            margin-top: 1rem;
        }

        input,
        select,
        textarea {
            width: 100%;
            margin-top: .5rem;
            padding: 1rem;
            font-size: 1rem;
            color: var(--violet);
            border: 1px solid var(--gray3);
            border-radius: .3rem;
        }

        textarea{
            resize: none; 
            border-radius: 0;
        }

        .sendButton{
            width: 100%;
            padding: 1rem 0;
            margin-top: 1rem;
            font-size: 1.2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: #E1011A;
            color: #fff;
            text-transform: uppercase;

            .icon{
                margin-right: 1rem;
                font-size: 1.5rem;
            }
        }
    }
`;