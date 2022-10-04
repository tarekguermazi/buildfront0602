import React from "react";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { calendar__bttom, check, envelope, member } from "../../assets/images";
import { i18n } from "../../i18n";
import Image from "src/view/shared/Image";
import { Link } from "react-router-dom";
function Publications() {
  return (
    <div className='publication__page'>
      <div className='app__calendar'>
        <img src={calendar__bttom} alt='' />
      </div>
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
              <Image
                src='https://placehold.jp/570x390.png'
                width='570'
                height='390'
                alt='Image'
              />
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
              <Image
                src='https://placehold.jp/269x390.png'
                width='269'
                height='390'
                alt='Image'
              />
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
                <Image
                  src='https://placehold.jp/570x390.png'
                  width='272'
                  height='182'
                  alt='Image'
                />
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
                <Image
                  src='https://placehold.jp/570x390.png'
                  width='272'
                  height='182'
                  alt='Image'
                />
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
              <Image
                src='https://placehold.jp/570x390.png'
                width='570'
                height='300'
                alt='Image'
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
                <Image
                  src='https://placehold.jp/169x113.png'
                  width='169'
                  height='113'
                  alt='Image'
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
                <Image
                  src='https://placehold.jp/169x113.png'
                  width='169'
                  height='113'
                  alt='Image'
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

          <Link to='/detaill'>
            <div className='plus__button'>Voir plus</div>
          </Link>
        </div>

        {/* stlyling the pollution */}
        <div className='pub__pollution'>
          <div className='archieve__header'>
            <h2>Pollution</h2>
            <div className='satestique__bar'></div>
          </div>
          <div className='migration__images'>
            <div>
              <Image
                src='https://placehold.jp/570x300.png'
                width={570}
                height={300}
                alt='Image'
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
                <Image
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt='Image'
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
                <Image
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt='Image'
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
                <Image
                  src='https://placehold.jp/169x113.png'
                  width={169}
                  height={113}
                  alt='Image'
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
              <Link to='/detaill'>
                <div className='plus__button'>Voir plus</div>
              </Link>
            </div>
          </div>
        </div>
        {/* 
        styling the articles + manifestation + évènement +Rapports */}

        <div className='app__articles'>
          <div className='articles__top'>
            <div className='__top'>
              <div>
                <div className='archieve__header'>
                  <h2>Articles</h2>
                  <div className='satestique__bar'></div>
                </div>
                <div className='manification__images'>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                </div>
                <Link to='/detaill'>
                  <div className='plus__button'>Voir plus</div>
                </Link>
              </div>
              <div>
                <div className='archieve__header'>
                  <h2>Manifestation</h2>
                  <div className='satestique__bar'></div>
                </div>
                <div className='manification__images'>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src='https://placehold.jp/120x78.png'
                      width={120}
                      height={78}
                      alt='Image'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: 233 }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                </div>
                <Link to='/detaill'>
                  <div className='plus__button'>Voir plus</div>
                </Link>
              </div>
            </div>
            <div className='app__rapports'>
              <div className='archieve__header'>
                <h2>Rapport</h2>
                <div className='satestique__bar'></div>
              </div>
              <div className='rapport__detaill'>
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Rapport </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>
                  <div className='detaill__content ' style={{ width: 233 }}>
                    Végétation dans le mont Bargou : Ressources naturelles et
                    pilier...
                  </div>
                </div>
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Rapport </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>
                  <div className='detaill__content ' style={{ width: 233 }}>
                    Végétation dans le mont Bargou : Ressources naturelles et
                    pilier...
                  </div>
                </div>
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>Rapport </p>
                    </div>
                    <div className='header__right'>10h32</div>
                  </div>
                  <div className='detaill__content ' style={{ width: 233 }}>
                    Végétation dans le mont Bargou : Ressources naturelles et
                    pilier...
                  </div>
                </div>
              </div>
              <Link to='/detaill'>
                <div className='plus__button'>Voir plus</div>
              </Link>
            </div>
          </div>

          <div>
            <div className='archieve__header'>
              <h2>évènement</h2>
              <div className='satestique__bar'></div>
            </div>
            <div className='images__evenement'>
              <Image
                src='https://placehold.jp/369x650.png'
                width={369}
                height={650}
                alt='Image'
              />
            </div>
          </div>
        </div>

        {/* styling the category */}
        <div className='app__category'>
          <div className='category__title'>Catégorie</div>

          <div className='category__list'>
            <div>évènement</div>
            <div>Manifestation</div>
            <div>Article scientifique</div>
            <div>Article journalistique</div>
            <div>Rapport</div>
            <div>Entretien</div>
          </div>
        </div>
        {/* Styling the news Lettre */}
        <div className='app__newsLettre'>
          <div className='newsLettre'>
            <div className='newsLettre__left'>
              <div className='archieve__header'>
                <h2>Espace&nbsp;membre</h2>
                <div className='satestique__bar' />
              </div>
              <div className='news'>
                <div className='left__image'>
                  <div className='background__red' />
                  <Image
                    src={member}
                    width={170}
                    height={221}
                    alt='Espace Memeber'
                  />
                </div>
                <div className='right__text'>
                  <div className='text__header'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla cursus et augue id consequat. Suspendisse sodales est
                    lectus. Phasellus dapibus nisl ut nisl accumsan,
                  </div>
                  <div className='text__content'>
                    <div>
                      <div className='check'>
                        <img className='lazyload' src={check} alt='' />
                      </div>
                      Nullam dolor diam,efficitur et pellentesque eget
                    </div>
                    <div>
                      <div className='check'>
                        <img className='lazyload' src={check} alt='' />
                      </div>
                      vestibulum a dui. Nullam sit amet cursus libero
                    </div>
                    <div>
                      <div className='check'>
                        <img className='lazyload' src={check} alt='' />
                      </div>
                      Donec dolor est, accumsan ac venenatis vitae
                    </div>
                  </div>
                  <div className='global__button'>Se connecter</div>
                </div>
              </div>
              <div className='text__content'>
                <div>
                  <div className='check'>
                    <img className='lazyload' src={check} alt='' />
                  </div>
                  Nullam dolor diam,efficitur et pellentesque eget
                </div>
                <div>
                  <div className='check'>
                    <img className='lazyload' src={check} alt='' />
                  </div>
                  vestibulum a dui. Nullam sit amet cursus libero
                </div>
                <div>
                  <div className='check'>
                    <img className='lazyload' src={check} alt='' />
                  </div>
                  Donec dolor est, accumsan ac venenatis vitae
                </div>
                <div className='global__button'>Se connecter</div>
              </div>
            </div>
            <div className='newsLettre__right'>
              <div className='archieve__header'>
                <h2>Newsletter</h2>
                <div className='satestique__bar' />
              </div>
              <div className='newsLettre__title'>LET’S KEEP IN TOUCH</div>
              <div className='newsLettere__detaill'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                cursus et augue id consequat. Suspendisse sodales est lectus.
              </div>
              <div className='newsLettre__formulaire'>
                <img className='lazyload' src={envelope} alt='Envolope Image' />
                <input type='text' placeholder=' Votre adresse email' />
                <div className='button__newLettre'>Envoyer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
