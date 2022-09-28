import styled from 'styled-components';

const HeroSectionStyle = styled.section`
    color: #fff;

    .bottomGrid{
        height: 500px;
        width: 100%;
        border-top: 5px solid red;
        background-color: var(--violet-dark);
        position: relative;
        top: -200px;
    }

    .splideContent{
        width: var(--cerntered-content);
        height: 507px;
        margin: auto;
        background-color: yellow;
        position: relative;
        z-index: 4;
    }
`;

export default HeroSectionStyle;