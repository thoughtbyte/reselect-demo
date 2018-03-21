import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "./List";

class AuthorList extends Component {
  render() {
    console.log("RENDERING AuthorList");

    return (
      <Fragment>
        <label className="label">Author List</label>
        <List list={this.props.list} />
      </Fragment>
    );
  }
}

AuthorList.propTypes = {
  list: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    list: state.bookList.map(item => item.authorName),
  };
}

export default connect(mapStateToProps)(AuthorList);
