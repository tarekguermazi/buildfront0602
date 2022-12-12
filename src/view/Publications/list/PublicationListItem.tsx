import PropTypes from "prop-types";
import Translate from "../../shared/Translate";

function PublicationListItem(props) {
  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    return <div key={record.id}>{Translate.Trans("title", record)}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return <>{valueAsArray().map((value) => displayableRecord(value))}</>;
}

PublicationListItem.propTypes = {
  value: PropTypes.any,
};

export default PublicationListItem;
