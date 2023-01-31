import React from "react";
import { i18n } from "../../i18n";
import { Link } from "react-router-dom";

function CopyWrite() {
  return (
    <div className="footer__">
      <div className="footer__copywrite">
        <div className="copywrite">
          <div className="copywrite__right">
            <ul>
              <li>
                <Link
                  className="footerLink"
                  to="/contact"
                  style={{ color: "#fff" }}
                >
                  {i18n("menu.Contact")}
                </Link>
              </li>
              <li>{i18n("common.condition_utilisation")}</li>
              <li>{i18n("common.mention_legal")}</li>
            </ul>
          </div>
          <div className="copywrite__left">{i18n("common.copyright")}</div>
        </div>
      </div>
    </div>
  );
}

export default CopyWrite;
