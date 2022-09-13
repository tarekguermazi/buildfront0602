import styled from "styled-components";

const TypeCard = styled.div`
    width: 100px;
    height: 120px;
    border: 1px solid var(--gray3);
    color: var(--violet);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .icon{
        font-size: 1.5rem;
        color: var(--gray3)
    }

    span{
        font-size: .8rem !important;
    }

`;

export default TypeCard;