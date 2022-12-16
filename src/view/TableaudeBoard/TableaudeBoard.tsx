import React, { useEffect } from "react";
import { calendar__bttom } from "../../assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";
import action from "src/modules/tableaudeBoard/list/tableaudeBoardListActions";
import selector from "src/modules/tableaudeBoard/list/tableaudeBoardListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Translate from "../shared/Translate";

function TableaudeBoard() {
  const dispatch = useDispatch();
  const rows = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);
  const hasRows = useSelector(selector.selectHasRows);

  useEffect(() => {
    dispatch(action.doFetch());
  }, [dispatch]);
  console.log(rows);

  return (
    <div className='app__tableaudeboard'>
      <div className='app__calendar'>
        <img src={calendar__bttom} alt='' />
      </div>
      <Breadcrumb
        items={[
          [i18n("dashboard.menu"), "/"],
          [i18n("entities.publication.label")],
        ]}
      />

      {loading && <h4>Loading ...</h4>}
      {!loading && !hasRows && <h4> No data Found </h4>}

      {!loading &&
        rows.map((item) => (
          <div className='tableaudeboard__'>
            <div className='archieve__header'>
              <h2>{Translate.Trans("title", item)}</h2>
              <div className='satestique__bar'></div>
            </div>

            <iframe
              title={Translate.Trans("title", item)}
              width='100%'
              height='600'
              allowFullScreen
              src={Translate.TransLink(item)}></iframe>
          </div>
        ))}
    </div>
  );
}

export default TableaudeBoard;
