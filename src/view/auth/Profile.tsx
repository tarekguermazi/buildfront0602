import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/auth/authSelectors";
import ListAppui from "../Appui/ListAppui";
import ListPublication from "../Publications/ListPublication";
import selectorsAppui from "src/modules/demandeAppui/list/demandeAppuiListSelectors";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import actionsAppui from "src/modules/demandeAppui/list/demandeAppuiListActions";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../shared/Spinner";

function Profile() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectors.selectCurrentUser);
  const userDropdownAvatar = useSelector(selectors.selectCurrentUserAvatar);
  const [activeTab, setActiveTab] = useState("tab1");
  const countAppui = useSelector(selectorsAppui.selectCount);
  const countPublications = useSelector(selectorsPublication.selectCount);
  const publicationLoding = useSelector(selectorsPublication.selectLoading);
  const appuiLoading = useSelector(selectorsAppui.selectLoading);

  const loading = appuiLoading || publicationLoding;
  const fetchAll = () => {
    Promise.all([
      dispatch(actionsPublication.doFetch()),
      dispatch(actionsAppui.doFetch()),
    ])
      .then((res) => {})
      .catch((error) => {});
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
    <div className='app__updateprofile'>
      <div className='updateprofile'>
        {loading && <Spinner styles={134.545} />}
        {!loading && (
          <ProfileHeader
            currentUser={currentUser}
            countAppui={countAppui}
            countPublication={countPublications}
            Image={userDropdownAvatar}
          />
        )}

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
