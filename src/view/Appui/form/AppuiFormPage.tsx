import React, { useEffect, useState } from "react";
import FormWrapper from "../../shared/styles/FormWrapper";
import { Link } from "react-router-dom";
import DemandeAppuiForm from "./DemandeAppuiForm";
import actions from "src/modules/demandeAppui/form/demandeAppuiFormActions";
import { useDispatch, useSelector } from "react-redux";
import selectors from "src/modules/demandeAppui/form/demandeAppuiFormSelectors";
import { getHistory } from "src/modules/store";
import { useRouteMatch } from "react-router-dom";
import Spinner from "../../shared/Spinner";
import { i18n } from "../../../i18n";
function Appui(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(selectors.selectInitLoading);
  const saveLoading = useSelector(selectors.selectSaveLoading);
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? "entities.demandeAppui.edit.title"
    : "entities.demandeAppui.new.title";

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };
  return (
    <div className='app__contenu'>
      <Link to='/profile'>
        <div className='retour'>
          <i className='fa-solid fa-arrow-left'></i> Retour
        </div>
      </Link>
      <div className='contenu'>
        <div className='archieve__header'>
          <h2>{i18n("menu.demande_appui")}</h2>
          <div className='communiquer__bar'></div>
        </div>
        <div className='contenu__description'>
          Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam cursus eros metus, sit amet scelerisque odio posuere eu. Sed vitae
          pharetra lacus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra
        </div>

        <FormWrapper>
          <div className='Login__container'>
            {initLoading && <Spinner />}
            {dispatched && !initLoading && (
              <DemandeAppuiForm
                title={title}
                saveLoading={saveLoading}
                record={record}
                isEditing={isEditing}
                onSubmit={doSubmit}
                onCancel={() => getHistory().push("/demande-appui")}
              />
            )}
          </div>
        </FormWrapper>
      </div>
    </div>
  );
}

export default Appui;
