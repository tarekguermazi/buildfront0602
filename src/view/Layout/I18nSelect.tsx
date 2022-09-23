import React from "react";
import { getLanguages, getLanguageCode } from "src/i18n";
import actions from "src/modules/layout/layoutActions";
import { arrow__down } from "src/assets/images";
function I18nSelect(props) {
  const doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
  };

  return (
    <>
      <div className='button__language'>
        <p>
          {getLanguages()
            .filter((item) => {
              return item.id === getLanguageCode();
            })
            .map((item) => {
              return item.label;
            })}
        </p>
        <img className='lazyload' src={arrow__down} alt='Arrow Down Icon' />
        <ul className='dropdown__translate'>
          {getLanguages().map((language) => (
            <li
              key={language.id}
              value={language.id}
              onClick={(event) => doChangeLanguage(language.id)}>
              {language.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default I18nSelect;
