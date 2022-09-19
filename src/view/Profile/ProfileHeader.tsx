import React from "react";
import { emptyImage } from "../../assets/images";
import { Link } from "react-router-dom";
function ProfileHeader(props) {
  const { currentUser, countAppui, countPublication, Image } = props;
  return (
    <div className='profile__header'>
      <div className='profile__avatar'>
        <img
          src={Image || emptyImage}
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
            <div className='description__number'>{countPublication}</div>
            Contenus
          </div>
          <div>
            <div className='description__number'>0</div> Discussions
          </div>
          <div>
            <div className='description__number'>{countAppui}</div> Demandes
            d’appui
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
