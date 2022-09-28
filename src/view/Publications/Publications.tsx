import React from "react";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { i18n } from "../../i18n";

function Publications() {
  return (
    <div className='publication__page'>
      <Breadcrumb
        title={i18n("entities.publication.label")}
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.publication.label")],
        ]}
      />
      <div className='app__pub'>
        <div className='publication__header'>
          <div className='image__pub'>
            <div className='pub__relative'>
              <img src='https://placehold.jp/570x390.png' alt='Image' />
              <div className='__detaills'>
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='__left'>
                      <p>Migration</p>
                    </div>
                    <div className='__right'>10h32</div>
                  </div>
                  <div className='__content'>
                    Plus de 13500 migrants clandestins tunisiens sont arrivés en
                    Italie
                  </div>
                  <div className='sub__content'>
                    Cras eleifend mattis lectus, sit amet commodo justo sagittis
                    id. Maecenas non fringilla ipsum. Nunc varius vitae sem nec
                    finibus. Duis mattis nulla dui...
                  </div>
                </div>
              </div>
            </div>
            <div className='pub__relative'>
              <img src='https://placehold.jp/269x390.png' alt='' />
              <div className='__detaills'>
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='__left'>
                      <p>Migration</p>
                    </div>
                    <div className='__right'>10h32</div>
                  </div>
                  <div className='__content'>
                    Plus de 13500 migrants clandestins tunisiens sont arrivés en
                    Italie
                  </div>
                </div>
              </div>
            </div>
            <div className='last__pub'>
              <div className='pub__relative'>
                <img src='https://placehold.jp/272x182.png' alt='' />
                <div className='__detaills'>
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='__left'>
                        <p>Migration</p>
                      </div>
                      <div className='__right'>10h32</div>
                    </div>
                    <div className='__content'>
                      Plus de 13500 migrants clandestins tunisiens sont arrivés
                      en Italie
                    </div>
                  </div>
                </div>
              </div>
              <div className='pub__relative'>
                <img src='https://placehold.jp/272x182.png' alt='' />
                <div className='__detaills'>
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='__left'>
                        <p>Migration</p>
                      </div>
                      <div className='__right'>10h32</div>
                    </div>
                    <div className='__content'>
                      Plus de 13500 migrants clandestins tunisiens sont arrivés
                      en Italie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
