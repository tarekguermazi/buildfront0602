import styled from 'styled-components'

const FilterStyles = styled.section`
  width: 600px;
  margin: 2rem 0;
  font-size: 1rem;
  background-color: #F1F1F1;
  

  .tabsHeader{
    border-bottom: 1px solid #A3A3A9;

    button{
      padding: 1rem;
      font-size: 1rem;
      color: var(--gray3);
      position: relative;
    }
    .active{
      color: var(--violet);

      &::after{
        content: "";
        display: block;
        width: 70%;
        height: 2px;
        position: absolute;
        left: 50%;
        bottom: -2px;
        transform: translateX(-50%);
        background-color: red;
        transition: .2s ease-in-out;
      }
    }
  }

  .tabContent{
    padding: 1rem;
    font-size: 1.4rem;
    color: var(--violet);

    .letterLinkFilter{
      display: inline-block;
      padding: .2rem .2rem;
      font-weight: 700;
      cursor: pointer;

      &:hover{
        color: red;
      }
    }
  }

`

export default FilterStyles
