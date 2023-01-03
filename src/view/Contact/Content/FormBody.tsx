import React, { useState } from "react";
import styled from "styled-components";
import ContactService from "src/modules/Contact/ContactService";
// ICONS
import { BiMailSend } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { i18n } from "src/i18n";

export default function FormBody({
  sender,
  type,
  setType,
  explication,
  setExplication,
}) {
  const [formIsSubmitting, setformIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formValues = {
      sender: sender.type ?? null,
      type: type === "--" ? null : type,
      explication: explication,
    };
    setformIsSubmitting(true);
    await ContactService.submitFormData(formValues);
    setformIsSubmitting(false);
  };

  return (
    <BodyLayout>
      <h3>{sender.display}</h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='contacttype'>{i18n("menu.Contact")}</label>
          <select
            id='contacttype'
            onChange={(event) => setType(event.target.value)}>
            <option value='--'>--</option>
            <option value='contact'>{i18n("menu.Contact")}</option>
            <option value='question'>{i18n("ContactPage.question")}</option>
            <option value='problem'>{i18n("ContactPage.problem")}</option>
          </select>
        </div>
        <div>
          <label htmlFor='problemInput'>
            {i18n("ContactPage.problemInput")}
          </label>
          <textarea
            id='problemInput'
            cols={30}
            rows={10}
            value={explication}
            onChange={(e) => setExplication(e.target.value)}></textarea>
        </div>
        {!formIsSubmitting && (
          <button type='submit' className='sendButton'>
            <BiMailSend className='icon' />
            {i18n("buttons.envoyer")}
          </button>
        )}
        {formIsSubmitting && (
          <button className='sendButton'>
            <AiOutlineLoading3Quarters className='loadingIcon' />
          </button>
        )}
      </form>
    </BodyLayout>
  );
}

const BodyLayout = styled.section`
  max-width: 700px;
  padding-top: 1rem;
  border-top: 2px solid #e1011a;

  h3 {
    font-family: "Proxima Nova";
    text-transform: capitalize;
    color: var(--violet);
  }
  p {
    margin-top: 1rem;
    font-family: "Proxima Nova";
    font-size: 1rem;
    line-height: 1.5;
    color: var(--violet);
  }

  form {
    font-family: "Proxima Nova";
    font-size: 1rem;
    line-height: 1.5;
    color: var(--violet);

    label {
      font-size: 1.1rem;
      font-weight: bold;
      display: block;
      margin-top: 1rem;
      font-family: "Proxima Nova";
    }
    option {
      font-family: "Proxima Nova";
    }
    input,
    select,
    textarea {
      font-family: "Proxima Nova";
      width: 100%;
      margin-top: 0.5rem;
      padding: 1rem;
      font-size: 1rem;
      color: var(--violet);
      border: 1px solid var(--gray3);
      border-radius: 0.3rem;
    }

    textarea {
      font-family: "Proxima Nova";
      resize: none;
      border-radius: 0;
    }

    .sendButton {
      width: 100%;
      padding: 1rem 0;
      margin-top: 1rem;
      font-size: 1.2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: #e1011a;
      color: #fff;
      text-transform: uppercase;

      .icon {
        margin-right: 1rem;
        font-size: 1.5rem;
      }

      .loadingIcon {
        animation: spin 0.7s linear infinite;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
