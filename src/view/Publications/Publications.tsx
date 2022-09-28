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
        {/* styling the migration section */}
        <div className='pub__migration'>
          <div className='archieve__header'>
            <h2>Migration</h2>
            <div className='satestique__bar'></div>
          </div>
          <div className='migration__images'>
            <div>
              <img
                className=' ls-is-cached lazyloaded'
                src='https://placehold.jp/570x300.png'
                alt='publication2 Icon'
                width={570}
                height={300}
              />
              <div className='list__detaill'>
                <div className='detaill__header'>
                  <div className='header__left'>
                    <p>Migration </p>
                  </div>
                  <div className='header__right'>10h32</div>
                </div>{" "}
                <div className='detaill__content'>
                  Naufrage d’une embarcation à Chebba : 6 autres cadavres
                  repêchés
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    Immigration clandestine : Le FTDS critique l'approche de
                    l'Etat
                  </div>
                </div>
              </div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    3730 tunisiens arrivés illicitement en Italie en moins d'un
                    mois
                  </div>
                </div>
              </div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    Karbaï: Les conditions de vie des migrants à Lampedusa ...
                    inhumaines
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='plus__button'>Voir plus</div>
        </div>

        {/* stlyling the pollution */}
        <div className='pub__pollution'>
          <div className='archieve__header'>
            <h2>Pollution</h2>
            <div className='satestique__bar'></div>
          </div>
          <div className='migration__images'>
            <div>
              <img
                className=' ls-is-cached lazyloaded'
                src='https://placehold.jp/570x300.png'
                alt='publication2 Icon'
                width={570}
                height={300}
              />
              <div className='list__detaill'>
                <div className='detaill__header'>
                  <div className='header__left'>
                    <p>Migration </p>
                  </div>
                  <div className='header__right'>10h32</div>
                </div>{" "}
                <div className='detaill__content'>
                  Naufrage d’une embarcation à Chebba : 6 autres cadavres
                  repêchés
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    Immigration clandestine : Le FTDS critique l'approche de
                    l'Etat
                  </div>
                </div>
              </div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    3730 tunisiens arrivés illicitement en Italie en moins d'un
                    mois
                  </div>
                </div>
              </div>
              <div>
                <img
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Migration </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>{" "}
                  <div className='detaill__content'>
                    Karbaï: Les conditions de vie des migrants à Lampedusa ...
                    inhumaines
                  </div>
                </div>
              </div>
              <div className='plus__button'>Voir plus</div>
            </div>
          </div>
        </div>
        {/* 
        styling the articles + manifestation + évènement +Rapports */}
      </div>
    </div>
  );
}

export default Publications;
