import styled from 'styled-components'

const GlossaireSection = styled.section`
    width: 100%;
    padding: 1rem 0;

    .sectionHeader{
        span{
            color: var(--violet);
            font-size: 2rem;
            font-weight: 700;

            &:after{
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                background-color: red;
                margin: 1rem 0;
            }
        }
    }
`

export default GlossaireSection;