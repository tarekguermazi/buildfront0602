import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  logos,
  arrow__down,
  facebook,
  instagram,
  Logo__mobile,
  Menue,
  search__mobile,
  twitter,
  youtube,
  Etudes,
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
import I18nSelect from "./I18nSelect";
import { i18n } from "../../i18n";
import { useHistory, useLocation } from "react-router-dom";
import actions from "src/modules/categoryPublication/list/categoryPublicationListActions";
import selectors from "src/modules/categoryPublication/list/categoryPublicationListSelectors";
import Translate from "../shared/Translate";
import { getLanguages, getLanguageCode } from "src/i18n";
import actionsLanguage from "src/modules/layout/layoutActions";

import Permissions from "src/security/permissions";
import PermissionChecker from "src/modules/auth/permissionChecker";

function Header(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  const loading = useSelector(authSelectors.selectLoading);
  const userDropdownAvatar = useSelector(authSelectors.selectCurrentUserAvatar);
  const history = useHistory();
  const location = useLocation();
  const selectRowsCategory = useSelector(selectors.selectRows);
  const loadingCategory = useSelector(selectors.selectLoading);

  //permissions
  const permissions = Permissions.values;
  const permissionChecker = new PermissionChecker(currentTenant, currentUser);
  const demandeAppuiPermission = permissionChecker.match(
    permissions.demandeAppuiCreate
  );
  const publicationPermission = permissionChecker.match(
    permissions.publicationCreate
  );
  const [activeSearch, setactiveSearch] = useState(false);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };
  const doChangeLanguage = (language) => {
    actionsLanguage.doChangeLanguage(language);
  };
  const [active, setActive] = useState(false);
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const selectedKeys = () => {
    const url = props.url;
    var token = url.split("/").slice(0, 2),
      res = token.join("/");
    return res;
  };
  const selectClass = (item) => {
    let className = "";
    if (item.path === selectedKeys()) {
      return (className = "dropdown li__active");
    } else if (item.path !== selectedKeys() && item.class) {
      className = "dropdown";
    } else {
      className = "";
    }
    return className;
  };
  const mediatiqueLink = [{}];
  const userMenu = (
    <ul className="header__dropdown">
      {publicationPermission ? (
        <Link to="/publication/new">
          <li>
            <img src={pen} alt="pen" />
            {i18n("menu.suggerer_des_donnees")}
          </li>
        </Link>
      ) : null}
      <Link to="/profile">
        <li>
          <img src={profile} alt="profile" className="lazyload" />
          {i18n("menu.profile")}
        </li>
      </Link>
      {demandeAppuiPermission ? (
        <Link to="/appui/new">
          <li>
            <img src={question} alt="question" className="lazyload" />
            {i18n("menu.demander_d_appui")}
          </li>
        </Link>
      ) : null}

      <li onClick={doSignout}>
        <img src={logout} alt="logout" className="lazyload" />

        {i18n("menu.deconnexion")}
      </li>
    </ul>
  );

  const generateList = (item, index) => {
    return (
      <Link to={`/detaill/category/${item.id}`} style={{ color: "#000" }}>
        <div key={index} className="publication_list">
          <li
            className="ul__hover"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              columnGap: "10px",
              alignItems: "center",
            }}
          >
            <img className="lazyload" src={Etudes} alt="Etudes Icon" />
            {Translate.Trans("title", item)}
          </li>
        </div>
      </Link>
    );
  };

  // HANDLING SEARCH LOGIC
  const [homeSearchString, setHomeSearchString] = useState("");
  const handleChange = (event) => {
    setHomeSearchString(event.target.value);
  };
  const handleClick = () => {
    history.push(searchPath);
  };
  const searchPath = {
    pathname: "/search",
    HOME_SEARCH_STRING: homeSearchString,
  };

  return (
    <React.Fragment>
      <div className="header__nav">
        <div className="nav">
          <Link to="/">
            <div className="nav__logo">
              <img className="lazyload" src={logos} alt="" />
            </div>
          </Link>
          <div className="nav__search">
            <input
              type="text"
              placeholder={i18n("common.recherche")}
              onChange={handleChange}
              value={homeSearchString}
            />
            {homeSearchString.length >= 1 && (
              // <Link to={searchPath}>
              <button onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              // </Link>
            )}
          </div>
          <div className="nav__socialmedia">
            <a href="https://www.facebook.com/ftdes" style={{ margin: 10 }}>
              <img className="lazyload" src={facebook} alt="FaceBook Icon" />
            </a>
            <a href="https://twitter.com/FT_DES" style={{ margin: 10 }}>
              <img className="lazyload" src={twitter} alt="Twitter ICon" />
            </a>
            <a
              href="https://www.youtube.com/@FTDESTunisie"
              style={{ margin: 10 }}
            >
              <img className="lazyload" src={youtube} alt="Youtube Icon" />
            </a>
            <a
              href="https://www.instagram.com/ftdes_tunisie/?hl=fr"
              style={{ margin: 10 }}
            >
              <img className="lazyload" src={instagram} alt="Instagram Icon" />
            </a>
          </div>
          <div className="nav__button">
            {currentUser && !loading && (
              <>
                <div className="button__profile">
                  <div className="header__avatar">
                    <img
                      src={userDropdownAvatar || emptyImage}
                      alt=""
                      width="36"
                      height="36"
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                      className="lazyload"
                    />
                  </div>
                  <p>{currentUser.fullName}</p>
                  <img
                    className="lazyload"
                    src={arrow__down}
                    alt="Arrow Down Icon"
                    id="down"
                  />
                  {userMenu}
                </div>
              </>
            )}
            {!currentUser && (
              <Link to="/auth/signin">
                <div className="button__connexion">
                  <i className="fa-solid fa-user" />
                  <p>{i18n("menu.espace_membre")}</p>
                </div>
              </Link>
            )}
            <I18nSelect />
          </div>
        </div>
        <div className="header__links">
          <div className="links">
            <ul className="ul__links">
              {menus.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li
                    style={{
                      padding: 8,
                      display: "flex",
                      alignItems: "baseline",
                      columnGap: 10,
                    }}
                    className={selectClass(item)}
                  >
                    {i18n(`menu.${item.label}`)}
                    {item.icon && (
                      <i className={item.icon} style={{ color: "red" }} />
                    )}
                    {item.class && item.label === "Publications" ? (
                      <ul className="links__sub">
                        {selectRowsCategory?.map((item, index) =>
                          generateList(item, index)
                        )}
                      </ul>
                    ) : (
                      item.class &&
                      item.label === "Médiathèque" && (
                        <ul className="links__sub">
                          {item.subMenue?.map((item, index) => (
                            <Link to={`${item.path}`} style={{ color: "#000" }}>
                              <div key={index} className="publication_list">
                                <li
                                  className="ul__hover"
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    columnGap: "10px",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    className="lazyload"
                                    src={Etudes}
                                    alt="Etudes Icon"
                                  />
                                  {i18n(`menu.submenu.${item.label}`)}
                                </li>
                              </div>
                            </Link>
                          ))}
                        </ul>
                      )
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header__nav_mobile">
        <div className="mobile__top">
          <div
            style={{ cursor: "pointer" }}
            className="search__icon"
            onClick={() => setactiveSearch(!activeSearch)}
          >
            <img
              className="lazyload"
              src={search__mobile}
              alt="Search Mobile Icon"
            />
          </div>

          <div className="mobile__logo">
            <img
              className="lazyload"
              src={Logo__mobile}
              alt="Logo Mobile Icon"
            />
          </div>

          {currentUser ? (
            <Link to="/profile">
              <div className="button__connexion">
                <i className="fa-solid fa-user" />
              </div>
            </Link>
          ) : (
            <Link to="/auth/signin">
              <div className="button__connexion">
                <i className="fa-solid fa-user" />
              </div>
            </Link>
          )}
        </div>
        <div className="mobile__links">
          <div
            style={{ cursor: "pointer" }}
            className="links__menue"
            onClick={() => setActive(!active)}
          >
            <img className="lazyload" src={Menue} alt="Menue Icon" />
          </div>

          <div className="links__translate" style={{ cursor: "pointer" }}>
            {getLanguageCode() === "fr" ? (
              <p onClick={() => doChangeLanguage("ar")}> Français</p>
            ) : (
              <p onClick={() => doChangeLanguage("fr")}>Arabic</p>
            )}
          </div>
        </div>
        {active && (
          <div className="sidebar__menu">
            <ul>
              {menus.map((item) => (
                <Link to={item.path}>
                  <li>{i18n(`menu.${item.label}`)}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        {activeSearch ? (
          <div className="search__mobile">
            <input
              type="text"
              placeholder={i18n("common.recherche")}
              onChange={handleChange}
              value={homeSearchString}
            />
            {homeSearchString.length >= 1 && (
              // <Link to={searchPath}>
              <button onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              // </Link>
            )}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
export default Header;
