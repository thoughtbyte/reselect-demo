import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PointlessThing from "./components/PointlessThing.jsx";
import BookList from "./components/BookList.jsx";
import AuthorList from "./components/AuthorList.jsx";
import { setList } from "./globalState/bookList.js";
import logo from "./logo.svg";
import "./App.css";

const list = [
  { bookTitle: "Clean Code", authorName: "Robert C. Martin" },
  { bookTitle: "The Pragmatic Programmer", authorName: "Andrew Hunt" },
  { bookTitle: "You Don't Know JS", authorName: "Kyle Simpson" },
  { bookTitle: "Eloquent JavaScript", authorName: "Marijn Haverbeke" },
];

class App extends Component {
  componentDidMount() {
    this.props.setList(list);
  }

  reorderList = () => {
    this.props.setList([...list.sort(() => 0.5 - Math.random())]);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reselect</h1>
        </header>
        <main>
          <PointlessThing />
          <button className="button" onClick={this.reorderList}>
            Reorder Lists
          </button>
          <BookList />
          <AuthorList />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  setList: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setList }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
