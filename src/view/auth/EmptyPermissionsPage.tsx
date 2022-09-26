import { i18n } from "src/i18n";
import actions from "src/modules/auth/authActions";
import { useDispatch } from "react-redux";

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
