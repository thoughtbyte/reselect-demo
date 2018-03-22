import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "./List";
import { getTitles } from "../globalState/bookList";

class BookList extends Component {
  render() {
    console.warn("RENDERING BookList");

    return (
      <Fragment>
        <label className="label">Book List</label>
        <List list={this.props.list} />
      </Fragment>
    );
  }
}

BookList.propTypes = {
  list: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    list: getTitles(state),
  };
}

export default connect(mapStateToProps)(BookList);
