import React from "react";
import { emptyImage } from "../../assets/images";
import { Link } from "react-router-dom";
import { i18n } from "../../i18n";

import Permissions from "src/security/permissions";
import PermissionChecker from "src/modules/auth/permissionChecker";
import { useSelector } from "react-redux";
import selectors from "src/modules/auth/authSelectors";

function ProfileHeader(props) {
  const { currentUser, countAppui, countPublication, Image } = props;
  const currentTenant = useSelector(selectors.selectCurrentTenant);
  //permissions
  const permissions = Permissions.values;
  const permissionChecker = new PermissionChecker(currentTenant, currentUser);
  const demandeAppuiPermission = permissionChecker.match(
    permissions.demandeAppuiCreate
  );
  const publicationPermission = permissionChecker.match(
    permissions.publicationCreate
  );
  return (
    <div className="profile__header">
      <div className="profile__avatar">
        <img
          src={Image || emptyImage}
          alt=""
          width="130"
          height="130"
          style={{ borderRadius: "50%", objectFit: "cover" }}
          className="lazyload"
        />
        <div className="avatar__camera">
          <i className="fa-solid fa-camera"></i>
        </div>
      </div>

      <div className="profile__description">
        <div className="description__top">
          <div>
            <div className="title__profile">{currentUser.fullName}</div>
            <div className="title__description">
              {currentUser.occupation
                ? i18n(`user.enumerators.occupation.${currentUser.occupation}`)
                : ""}
              ,
              {currentUser.pays
                ? i18n(`user.enumerators.pays.${currentUser.pays}`)
                : ""}
            </div>
          </div>
          <Link to="/profile/update">
            <div className="modify">{i18n("common.edit")}</div>
          </Link>
        </div>
        <div className="description__bottom">
          {publicationPermission ? (
            <div>
              <div className="description__number">{countPublication}</div>
              {i18n("entities.publication.label")}
            </div>
          ) : null}
          {demandeAppuiPermission ? (
            <div>
              <div className="description__number">{countAppui}</div>
              {i18n("entities.demandeAppui.label")}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
