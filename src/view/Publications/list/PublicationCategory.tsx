import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../shared/Translate";
function PublicationCategory(props) {
  const { rows, index } = props;
  return (
    <div key={index}>
      <Link to={`/detaill/category/${rows._id}`} style={{ color: "#000" }}>
        {Translate.Trans("title", rows)}
      </Link>
    </div>
  );
}
export default PublicationCategory;
