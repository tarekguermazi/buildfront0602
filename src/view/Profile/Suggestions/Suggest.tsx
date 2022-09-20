import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { i18n } from "src/i18n";
import actions from "src/modules/publication/form/publicationFormActions";
import selectors from "src/modules/publication/form/publicationFormSelectors";
import { getHistory } from "src/modules/store";
import { Link } from "react-router-dom";
import * as yup from "yup";
import PublicationForm from "./PublicationForm";
import Spinner from "src/view/shared/Spinner";
import FormWrapper from "../../shared/styles/FormWrapper";
import { now } from "lodash";
import moment from "moment";

export default function Suggest(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(selectors.selectInitLoading);
  const saveLoading = useSelector(selectors.selectSaveLoading);
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n("entities.publication.edit.title")
    : i18n("entities.publication.new.title");
  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      data.date = moment(now(), "YYYY-MM-DD");
      data.statut = "en_attente";
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
      <section className='contenu'>
        <div className='mainContent'>
          <div className='archieve__header'>
            <h2>Suggérer&nbsp;DU&nbsp;contenu</h2>
            <div className='communiquer__bar'></div>
          </div>
          <div className='contenu__description'>
            Description lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam cursus eros metus, sit amet scelerisque odio posuere eu. Sed
            vitae pharetra lacus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra
          </div>

          <FormWrapper>
            <div className='Login__container'>
              {initLoading && <Spinner />}
              {dispatched && !initLoading && (
                <PublicationForm
                  title={title}
                  saveLoading={saveLoading}
                  record={record}
                  isEditing={isEditing}
                  onSubmit={doSubmit}
                  onCancel={() => getHistory().push("/profile")}
                />
              )}
            </div>
          </FormWrapper>
        </div>
      </section>
    </div>
  );
}
