import React from 'react'
import styled from 'styled-components'
// ICONS
import { GiMicroscope } from 'react-icons/gi';
import { FaGraduationCap, FaNewspaper, FaFistRaised } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';

export default function FormHeader({ setUserType }) {

    const userTypes = [
        { type: 'chercheur', display: 'chercheur/se', icon: 'GiMicroscope', state: 0 },
        { type: 'etudiant', display: 'étudiant/e', icon: 'graduation', state: 1 },
        { type: 'presse', display: 'presse', icon: 'newPaper', state: 1 },
        { type: 'activiste', display: 'activiste', icon: 'power', state: 1 },
        { type: 'acteur_social', display: 'acteurs sociaux', icon: 'contact', state: 1 }
    ]

    const handleUserTypeSelection = event => {
        const typeToDisplay = userTypes.filter(ut => ut.type === event.target.value)[0];
        setUserType(typeToDisplay);
    }

    return (
        <HeaderLayout>
            <h3>Vous êtes ?</h3>
            <p>Choisissez un thème parmi les options suivantes pour accéder à la demande associée.</p>

            <div className="radioOptins" onChange={handleUserTypeSelection}>
                <label htmlFor="chercheur">
                    <input type="radio" name="userType" value="chercheur" id="chercheur" defaultChecked />
                    <div className="contentContainer">
                        <GiMicroscope className='icon' />
                        <span>chercheur/se</span>
                    </div>
                </label>

                {/* OTHERS */}
                {
                    userTypes.map((userTypes, index) => {
                        if (userTypes.state === 1) {
                            return (
                                <label htmlFor={userTypes.type} key={index}>
                                    <input type="radio" name='userType' value={userTypes.type} id={userTypes.type} />
                                    <div className="contentContainer">
                                        {
                                            {
                                                microscope: (
                                                    <GiMicroscope className='icon' />
                                                ),
                                                graduation: (
                                                    <FaGraduationCap className='icon' />
                                                ),
                                                newPaper: (
                                                    <FaNewspaper className='icon' />
                                                ),
                                                power: (
                                                    <FaFistRaised className='icon' />
                                                ),
                                                contact: (
                                                    <IoIosContact className='icon' />
                                                )
                                            }[userTypes.icon]
                                        }
                                        <span>{userTypes.display}</span>
                                    </div>
                                </label>
                            )
                        }
                    })
                }
            </div>
        </HeaderLayout>
    )
}


const HeaderLayout = styled.section`
    width: 700px;
    background-color: #fff;
    padding-bottom: 1rem;
   
    font-family: "Proxima Nova";
    font-size: 1.2rem;
    line-height: 1.5;
    color: var(--violet);
    
    p{
        margin-top: 1rem;
    }
    
    h3{
        font-family: "Proxima Nova";
        font-weight: 900;
    }

    .radioOptins{
        margin-top: 1rem;
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));

        input[type="radio"]{
            display: none;

            &:checked~.contentContainer{
                border: 1px solid #E1011A;
                .icon{ color: #E1011A; }
                span{ color: #E1011A; }
            }
        }

        .contentContainer{
            width: 100%;
            padding: 1.4rem;
            border: 1px solid var(--gray3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .icon{
                font-size: 2rem;
                color: var(--violet);
            }

            span{
                margin-top: 1rem;
                font-size: .8rem;
                text-transform: uppercase;
                text-align: center;
                color: var(--violet);
            }

            &:hover{
                border: 1px solid #E1011A;
                .icon{ color: #E1011A; }
                span{ color: #E1011A; }
            }
        }
    }
`;