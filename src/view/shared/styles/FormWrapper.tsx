import styled from "styled-components";
const FormWrapper = styled.div`
  .Login__container {
    padding-top: 44px;
    position: relative;
  }

  button {
    color: var(--dark--red);
    border: 0;
    // padding: 0.8rem 1.2rem;
    cursor: pointer;
  }
  .container__form {
    display: flex;
    row-gap: 25px;
    justify-content: center;
    align-items: flex-end;
    width: calc(100vw - 10%);
    max-width: 501px;
    flex-direction: column;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    border: 1px solid #bdbdbd;
    height: 50px;
    padding: 14px 0 14px 12px;
    color: var(--violet);
    margin-top: 7px;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
  }
  .item__button {
    display: flex;
    column-gap: 45px;
    align-items: center;
    justify-content: flex-end;
  }
  .form__button {
    width: 177px;
    background: var(--red);
    color: var(--white);
    font-family: "Bebas Neue Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    padding: 14px 0;
    display: flex;
    justify-content: center;
    place-items: baseline;
    cursor: pointer;
    text-transform: Uppercase;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .form-group {
    text-align: start;
    width: 100% !important;
  }
  .form__button:hover {
    color: #fff;
    background: #ff5444;
    border-color: ##ff5444;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  }
  label {
    color: var(--violet);
    font-family: "Proxima Nova";
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    padding-bottom: 7px;
  }
  .form__oublier {
    position: relative;
    padding-bottom: 31px;
  }
  .oublier {
    cursor: pointer;
    position: absolute;
    right: 0;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  .Login__container {
    padding-top: 32px;
    position: relative;
    width: 100% !important;
  }
  .form__link {
    display: flex;
    justify-content: center;
    column-gap: 12px;
  }
  .link__account {
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    font-family: "Bebas Neue Pro";
  }
  .link__create {
    font-family: "Bebas Neue Pro";
    color: var(--red);
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
    text-transform: uppercase;
  }
  .invalid-feedback {
    color: var(--red);
  }

  @media (max-wdith: 800px) {
  }

  .cancel__button {
    padding: 0;
    background-color: transparent;
    position: relative;
    right: 0;
    font-family: "Bebas Neue Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: var(--violet);
  }
  .form__select {
    display: flex;
    flex-direction: column;
  }
  select,
  textarea {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    padding: 15px;
  }
  select {
    height: 50px;
  }
  textarea {
    height: 150px;
    width: 100%;
  }

  .form__importance {
    display: flex;
    flex-direction: column;
  }
  .importance__status {
    display: flex;
    with: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .importance__status > div {
    display: grid;
    place-items: center;
    height: 50px;
    border: 1px solid #bdbdbd;
    width: 100%;
    cursor: pointer;
    color: var(--gray5);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  .importance__status > .status__active {
    border: 2px solid #2b2840;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.09);
    color: var(--violet);
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .form__radio {
    padding-top: 7px;
    display: flex;
    flex-direction: column;
    width: 100%;
    column-gap: 21px;
  }
  .form__radio > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 21px;
  }
  .form__radio > div > div {
    height: 50px;
    border: 1px solid #bdbdbd;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 11px;
    column-gap: 74px;
    cursor: pointer;
  }

  .form__radio > div > .radio__active {
    border: 2px solid #2b2840;
  }

  input[type="radio"] {
    width: 18px;
    height: 18px;
    background-clip: content-box;
    border: 2px solid #bbbbbb;
    background-color: #e7e6e7;
    accent-color: var(--red);
  }

  input[type="radio"]:checked {
    background-color: #93e026;
  }
  .form_textarea {
    width: 100%;
  }
`;
export default FormWrapper;
