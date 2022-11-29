import React from 'react'
import styled from 'styled-components'
export default function FormBody() {
    return (
        <BodyLayout>
            <h3>Chercheur/se</h3>
            <p>Contact, question, problème d'inscription</p>

            <form>
                <div>
                    <label htmlFor="emailInput">Contatct</label>
                    <input type="email" placeholder='E-mail' id='emailInput' />
                </div>
                <div>
                    <label htmlFor="quesstionInput">Question</label>
                    <input type="text" placeholder='Question' id='questionInput' />
                </div>
                <div>
                    <label htmlFor="problemInput">Problème d'inscription</label>
                    <textarea id="problemInput" cols={30} rows={10}></textarea>
                </div>
            </form>
        </BodyLayout>
    )
}


const BodyLayout = styled.section`
    width: 700px;
    margin-top: 1rem;
    background-color: #fff;
    padding: 1rem;
    border-top: 2px solid #E1011A;

    h3{
        font-family: "Proxima Nova";
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
        margin-top: 1rem;
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
    }
`;