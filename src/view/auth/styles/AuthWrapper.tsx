import styled from "styled-components";
const AuthWrapper = styled.div`
  .app__signin {
    width: 100%;
    padding-top: 140px;
    display: grid;
    place-items: center;
    place-content: center;
  }
  .app__login {
    width: 501px;
  }
  @media (max-width: 1170px) {
    .app__signin {
      width: 100%;
      display: grid;
      place-items: center;
      place-content: center;
      position: relative;
      height: 100vh;
      z-index: 1;
    }

    .app__login {
      width: calc(100vw - 10%);
    }
  }
  button {
    color: var(--dark--red);
    border: 0;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
  }

  .container__form {
    display: grid;
    row-gap: 25px;
  }
  input {
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
  .form__button {
    width: 100%;
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
  .form__button:hover {
    color: #fff;
    background: #ff5444;
    border-color: #ff5444;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  }
  label {
    color: var(--violet);
    font-family: "Proxima Nova";
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    padding-bottom: 14px;
  }
  .form__oublier {
    position: relative;
    padding-bottom: 31px;
  }
  .oublier {
    cursor: pointer;
    position: absolute;
    text-decoration: underline;
    right: 0;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  .Login__container {
    padding-top: 44px;
    position: relative;
  }
  .form__link {
    display: flex;
    justify-content: center;
    column-gap: 12px;
  }
  .link__account {
    font-family: "Bebas Neue Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
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
`;
export default AuthWrapper;
