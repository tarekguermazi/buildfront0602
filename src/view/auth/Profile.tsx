import React, { useState } from "react";
import { emptyImage } from "../../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
import ListAppui from "../Appui/ListAppui";
import ListPublication from "../Publications/ListPublication";
function Profile() {
  const currentUser = useSelector(selectors.selectCurrentUser);
  const userDropdownAvatar = useSelector(selectors.selectCurrentUserAvatar);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab1
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab1
    setActiveTab("tab3");
  };

  return (
    <div className='app__updateprofile'>
      <div className='updateprofile'>
        <div className='profile__header'>
          <div className='profile__avatar'>
            <img
              src={userDropdownAvatar || emptyImage}
              alt=''
              width='130'
              height='130'
              style={{ borderRadius: "50%", objectFit: "cover" }}
              className='lazyload'
            />
            <div className='avatar__camera'>
              <i className='fa-solid fa-camera'></i>
            </div>
          </div>

          <div className='profile__description'>
            <div className='description__top'>
              <div>
                <div className='title__profile'>{currentUser.fullName}</div>
                <div className='title__description'>
                  {currentUser.occupation}, {currentUser.pays}
                </div>
              </div>
              <Link to='/updateprofile'>
                <div className='modify'>Modifier</div>
              </Link>
            </div>
            <div className='description__bottom'>
              <div>
                <div className='description__number'>13</div> Contenus
              </div>
              <div>
                <div className='description__number'>4</div> Discussions
              </div>
              <div>
                <div className='description__number'>0</div> Demandes d’appui
              </div>
            </div>
          </div>
        </div>
        <div className='profile__list'>
          <div className='tabs'>
            <ul className='nav'>
              <li
                className={activeTab === "tab1" ? "active__li__tabs" : ""}
                onClick={handleTab1}>
                Contenu
              </li>
              <li
                className={activeTab === "tab2" ? "active__li__tabs" : ""}
                onClick={handleTab2}>
                Demande d’appui
              </li>
            </ul>
          </div>
          <div className='list__button'>
            <div className='list__title'>
              <h2>contenu récent </h2>
            </div>
            <div className='button__contenue'>Suggérer de contenu</div>
          </div>
          <React.Fragment>
            {activeTab === "tab1" && <ListPublication />}
            {activeTab === "tab2" && <ListAppui />}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

export default Profile;
