import React from "react";
import { Link } from "react-router-dom";
function PublicationCategory(props) {
  const { rows, index } = props;
  return (
    <div key={index}>
      <Link to={`/detaill/category/${rows._id}`} style={{ color: "#000" }}>
        {rows.titleFR}
      </Link>
    </div>
  );
}
export default PublicationCategory;
