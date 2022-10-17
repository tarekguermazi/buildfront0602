import styled from 'styled-components'

const GridContentLayout = styled.section`
    width: 100%;
    
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1rem));
        grid-gap: 1rem;
    }
`;

export default GridContentLayout;