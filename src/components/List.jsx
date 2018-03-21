import React from "react";
import PropTypes from "prop-types";

const List = ({ list }) => {
  console.log("RENDERING List");

  return (
    <div className="card">
      <ul>{list.map(listItem => <li key={listItem}>{listItem}</li>)}</ul>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
