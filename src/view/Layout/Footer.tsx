import React from "react";
import MegaFooter from "./MegaFooter";

function Footer() {
  return (
    <>
      <MegaFooter />
      <div className='footer__'>
        <div className='footer__copywrite'>
          <div className='copywrite'>
            <div className='copywrite__right'>
              <ul>
                <li>Contact</li>
                <li>Conditions d’utilisation</li>
                <li>Mentions légales</li>
              </ul>
            </div>
            <div className='copywrite__left'>
              © 2022 FTDES - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
