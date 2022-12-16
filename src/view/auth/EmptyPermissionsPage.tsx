import { i18n } from "src/i18n";
import actions from "src/modules/auth/authActions";
import { useDispatch } from "react-redux";
import "./styles/EmptyPermissionWrapper.css";
import { useEffect } from "react";
function EmptyPermissionsPage() {
  const dispatch = useDispatch();

  const doSignout = () => {
    dispatch(actions.doSignout());
  };

  useEffect(() => {
    const nav = document.querySelector(".header__nav");
    nav?.classList.add("abosulte");
  });
  return (
    <div className="emptypermission">
      <div>
        <div>
          <i
            className="fa-solid fa-xmark"
            style={{ fontSize: 50, color: "#2B2840", float: "right" }}
            onClick={doSignout}
          />
        </div>
        <div className="content__message">
          {/* <div className='title__message'>Hi ! Mootassam</div> */}
          <div className="detaill__message">
            {i18n("auth.emptyPermissions.message")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyPermissionsPage;
