import React from "react";
import { Link } from "react-router-dom";
import {
  logos,
  arrow__down,
  down,
  facebook,
  instagram,
  Logo__mobile,
  Menue,
  search__mobile,
  twitter,
  youtube,
  Etudes,
  Communique,
  petition,
  rapport,
  Poster,
  invitation,
  question,
  pen,
  logout,
  profile,
  emptyImage,
} from "src/assets/images";
import menus from "../menus";
import authSelectors from "src/modules/auth/authSelectors";
import authActions from "src/modules/auth/authActions";
import { useSelector, useDispatch } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const loading = useSelector(authSelectors.selectLoading);
  const userDropdownAvatar = useSelector(authSelectors.selectCurrentUserAvatar);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };
  const selectedKeys = () => {
    const url = props.url;
    var token = url.split("/").slice(0, 2),
      res = token.join("/");
    return res;
  };

  const userMenu = (
    <ul className='header__dropdown'>
      <Link to='/publication/new'>
        <li>
          <img src={pen} alt='pen' />
          Suggérer des données
        </li>
      </Link>
      <Link to='/profile'>
        <li>
          <img src={profile} alt='profile' className='lazyload' />
          Profil
        </li>
      </Link>
      <Link to='/appui/new'>
        <li>
          <img src={question} alt='question' className='lazyload' />
          Demander d’appui
        </li>
      </Link>
      <Link to='/favoris'>
        <li>
          <img src={question} alt='question' className='lazyload' />
          Favoris
        </li>
      </Link>
      <li onClick={doSignout}>
        <img src={logout} alt='logout' className='lazyload' />
        Déconnexion
      </li>
    </ul>
  );
  return (
    <React.Fragment>
      <div className='header__nav'>
        <div className='nav'>
          <div className='nav__logo'>
            <img className='lazyload' src={logos} alt='' />
          </div>
          <div className='nav__search'>
            <input type='text' placeholder='Recherche' />
            <i className='fa-solid fa-magnifying-glass' />
          </div>
          <div className='nav__socialmedia'>
            <img className='lazyload' src={facebook} alt='FaceBook Icon' />
            <img className='lazyload' src={twitter} alt='Twitter ICon' />
            <img className='lazyload' src={youtube} alt='Youtube Icon' />
            <img className='lazyload' src={instagram} alt='Instagram Icon' />
          </div>
          <div className='nav__button'>
            {currentUser && !loading && (
              <>
                <div className='button__profile'>
                  <div className='header__avatar'>
                    <img
                      src={userDropdownAvatar || emptyImage}
                      alt=''
                      width='36'
                      height='36'
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                      className='lazyload'
                    />
                  </div>
                  <p>{currentUser.fullName}</p>
                  <img
                    className='lazyload'
                    src={arrow__down}
                    alt='Arrow Down Icon'
                    id='down'
                  />
                  {userMenu}
                </div>
              </>
            )}
            {!currentUser && (
              <Link to='/auth/signin'>
                <div className='button__connexion'>
                  <i className='fa-solid fa-user' />
                  <p>Espace&nbsp;membres</p>
                </div>
              </Link>
            )}
            <div className='button__language'>
              <p>Français</p>
              <img
                className='lazyload'
                src={arrow__down}
                alt='Arrow Down Icon'
              />
            </div>
          </div>
        </div>
        <div className='header__links'>
          <div className='links'>
            <ul>
              <li className={selectedKeys() === "/" ? "li__active" : ""}>
                <img
                  className='lazyload'
                  src={Menue}
                  alt='Menue Icon'
                  id='humberger'
                />
                Menu
              </li>
              {menus.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li className={item.class ? "dropdown" : ""}>
                    {item.label}
                    {item.icon && (
                      <i
                        className={item.icon}
                        style={{ color: "red", paddingLeft: 10 }}
                      />
                    )}
                    {item.icon && (
                      <ul className='links__sub'>
                        <div>
                          <li>
                            <img
                              className='lazyload'
                              src={Etudes}
                              alt='Etudes Icon'
                            />
                            études
                          </li>
                          <li>
                            <img
                              className='lazyload'
                              src={Communique}
                              alt='Communique Png'
                            />
                            Communiqués
                          </li>
                          <li>
                            <img
                              className='lazyload'
                              src={petition}
                              alt='Petition Icon'
                            />
                            Pétitions
                          </li>
                          <li>
                            <img
                              className='lazyload'
                              src={petition}
                              alt='Petition Icon'
                            />
                            Médiatheques
                          </li>
                        </div>

                        <div>
                          <li>
                            <img
                              className='lazyload'
                              src={rapport}
                              alt='Rapport ICon'
                            />
                            Rapports
                          </li>
                          <li>
                            <img
                              className='lazyload'
                              src={Poster}
                              alt='Poster Icon'
                            />
                            Posters
                          </li>
                          <li>
                            <img
                              className='lazyload'
                              src={invitation}
                              alt='invitation ICon'
                            />
                            Invitations
                          </li>
                        </div>
                      </ul>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='header__nav_mobile'>
        <div className='mobile__top'>
          <div className='search__icon'>
            <img
              className='lazyload'
              src={search__mobile}
              alt='Search Mobile Icon'
            />
          </div>
          <div className='mobile__logo'>
            <img
              className='lazyload'
              src={Logo__mobile}
              alt='Logo Mobile Icon'
            />
          </div>
          <div className='button__connexion'>
            <i className='fa-solid fa-user' />
          </div>
        </div>
        <div className='mobile__links'>
          <div className='links__menue'>
            <img className='lazyload' src={Menue} alt='Menue Icon' />
          </div>
          <div className='links__translate'>
            <p>FR</p>
            <img className='lazyload' src={down} alt='arrow down' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
