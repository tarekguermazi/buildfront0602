import { i18n } from "src/i18n";
import actions from "src/modules/auth/authActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/auth/authSelectors";

function EmptyPermissionsPage() {
  const dispatch = useDispatch();

  const doSignout = () => {
    dispatch(actions.doSignout());
  };
  return (
    <>
      <h3>{i18n("auth.emptyPermissions.message")}</h3>
      <button onClick={doSignout}>{i18n("auth.signout")}</button>
    </>
  );
}

export default EmptyPermissionsPage;
