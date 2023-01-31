import React, { useState } from "react";
import { i18n } from "src/i18n";
import { BsEnvelope } from "react-icons/bs";
import PublicationAutocompleteFormItem from "../Publications/autocomplete/PublicationAutocompleteFormItem";

function NewsLettre() {
  const [show, setShow] = useState(false);
  return (
    <div className="app__newsLettre">
      <div className="newsLettre">
        <div className="newsLettre__right">
          <div className="archieve__header">
            <h2>{i18n("common.newsletter")}</h2>
            <div className="satestique__bar" />
          </div>
          <div className="newsLettre__content">
            <div className="newsLettere__detaill">
              {i18n("common.newsletterText")}
            </div>
            {/* <div className="newsLettre__formulaire">
              <iframe
                width="600"
                height="500"
                src="https://cde7a309.sibforms.com/serve/MUIEAP1-prkwrYjb5w27E5JjgWb9Ivu1COwqpfmklfytcnVxPdwhhvb4a2SZUmuOA513lZxZO_WffgOmHC2OZodPsgMcilNPGKDugCsydMDpIhBtajSBkxQ1TxVSK_oMSPKqvG7gZ0qVmBdhx7HhPkeATdWk9VWXLGgTNc5fH7R39OUKKgoFahn2_-RumVlvCqc3Iqd7wVJvmlns"
                frameBorder="0"
                scrolling="none"
                allowFullScreen={false}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                }}
              ></iframe>
            </div> */}
            <div className="newsLettre__formulaire">
              <div className="button__newLettre" onClick={() => setShow(true)}>
                {i18n("common.subscribe")}
              </div>
            </div>
          </div>
          {show ? (
            <div>
              <h2>Show</h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NewsLettre;
