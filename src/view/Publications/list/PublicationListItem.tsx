import PropTypes from "prop-types";

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
    return <div key={record.id}>{record.titleFR}</div>;
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
