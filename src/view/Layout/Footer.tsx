import React from "react";
import {
  facebook,
  logo__footer,
  twitter,
  youtube,
  down__footer,
  instagram,
} from "src/assets/images";
import CopyWrite from "./CopyWrite";
import NewsLettre from "./NewsLettre";
import { Link } from "react-router-dom";
import { i18n } from "../../i18n";

export default function MegaFooter() {
  const langue = localStorage.getItem("language");

  return (
    <>
      <NewsLettre />
      <div className="app__footer">
        <div className="footer">
          <div className="footer__logo">
            <img src={logo__footer} alt="" />
            <div className="footer__content detaill__footer">
              {i18n("common.FTDES")}
            </div>
          </div>
          <div className="hr__bar"></div>
          <div className="footer__menu">
            <div className="label__footer">{i18n("common.Menue")}</div>
            <div className="footer__content content__menu">
              <div>
                <ul>
                  <li>
                    <Link className="footerLink" to="/A_propos">
                      {i18n("menu.propos")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footerLink" to="/Archives">
                      {i18n("menu.Archives")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footerLink" to="/Glossaire">
                      {i18n("menu.Glossaire")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footerLink" to="/Publications">
                      {i18n("menu.Publications")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link className="footerLink" to="/Evenements">
                      {i18n("menu.Evènements")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footerLink" to="/Contact">
                      {i18n("menu.Contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hr__bar"></div>
          <div className="footer__socialmedia">
            <div className="label__footer">{i18n("common.social_media")}</div>
            <div className="footer__content content__socialmedia">
              <div className="socialmedia__facebook">
                <img className="lazyload" src={facebook} alt="" />
                Facebook
              </div>
              <div className="socialmedia__Twitter">
                <img className="lazyload" src={twitter} alt="" />
                Twitter
              </div>
              <div className="socialmedia__Youtube">
                <img className="lazyload" src={youtube} alt="" />
                Youtube
              </div>
              <div className="socialmedia__Instagram">
                <img className="lazyload" src={instagram} alt="" />
                Instagram
              </div>
            </div>
          </div>
          <div className="hr__bar"></div>
          <div className="footer__contact">
            <div className="label__footer">{i18n("common.Contact")}</div>
            <div className="footer__content contact__desctioption">
              {i18n("common.address")}
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </>
  );
}
