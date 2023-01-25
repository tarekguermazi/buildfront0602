import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
import AppuiList from "src/view/Appui/list/DemandeAppuiList";
import selectorsAppui from "src/modules/demandeAppui/list/demandeAppuiListSelectors";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import actionsAppui from "src/modules/demandeAppui/list/demandeAppuiListActions";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../shared/Spinner";
import PublicationList from "src/view/Publications/list/PublicationList";
import { i18n } from "../../i18n";

import Permissions from "src/security/permissions";
import PermissionChecker from "src/modules/auth/permissionChecker";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectors.selectCurrentUser);
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
  const userDropdownAvatar = useSelector(selectors.selectCurrentUserAvatar);
  const [activeTab, setActiveTab] = useState(
    publicationPermission ? "tab1" : "tab2"
  );
  const countAppui = useSelector(selectorsAppui.selectCount);
  const countPublications = useSelector(selectorsPublication.selectCount);
  const publicationLoding = useSelector(selectorsPublication.selectLoading);
  const appuiLoading = useSelector(selectorsAppui.selectLoading);

  const loading = appuiLoading || publicationLoding;
  const fetchAll = () => {
    if (demandeAppuiPermission) {
      Promise.all([dispatch(actionsAppui.doFetch())])
        .then((res) => {})
        .catch((error) => {});
    }
    if (publicationPermission) {
      Promise.all([dispatch(actionsPublication.doFetch())])
        .then((res) => {})
        .catch((error) => {});
    }
    // Promise.all([
    //   dispatch(actionsPublication.doFetch()),
    //   dispatch(actionsAppui.doFetch()),
    // ])
    //   .then((res) => {})
    //   .catch((error) => {});
  };
  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab1
    setActiveTab("tab2");
  };
  // const handleTab3 = () => {
  //   // update the state to tab1
  //   setActiveTab("tab3");
  // };

  return (
    <div className="app__updateprofile">
      <div className="updateprofile">
        {loading && <Spinner styles={134.545} />}
        {!loading && (
          <ProfileHeader
            currentUser={currentUser}
            countAppui={countAppui}
            countPublication={countPublications}
            Image={userDropdownAvatar}
          />
        )}
        <div className="profile__list">
          <div className="tabs">
            <ul className="nav">
              {publicationPermission ? (
                <li
                  className={activeTab === "tab1" ? "active__li__tabs" : ""}
                  onClick={handleTab1}
                >
                  {i18n("menu.contenu")}
                </li>
              ) : null}
              {demandeAppuiPermission ? (
                <li
                  className={activeTab === "tab2" ? "active__li__tabs" : ""}
                  onClick={handleTab2}
                >
                  {i18n("menu.demande_appui")}
                </li>
              ) : null}
            </ul>
          </div>

          <React.Fragment>
            {publicationPermission ? (
              <>{activeTab === "tab1" && <PublicationList />}</>
            ) : null}
            {demandeAppuiPermission ? (
              <>{activeTab === "tab2" && <AppuiList />}</>
            ) : null}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

export default Profile;
