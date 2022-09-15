import React from "react";
import RCPagination from "rc-pagination";
import PaginationWrapper from "src/view/shared/table/PaginationWrapper";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const onChange = (current, pageSize) => {
    props.onChange({
      current: Number(current),
      pageSize: Number(pageSize),
    });
  };

  const { pagination, disabled, showTotal } = props;
  const { current, pageSize, total } = pagination;
  return (
    <PaginationWrapper>
      <RCPagination
        pageSize={Number(pageSize)}
        current={current}
        onChange={onChange}
        total={total}
        showTotal={showTotal || undefined}
      />
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  showTotal: PropTypes.func,
};

export default Pagination;
