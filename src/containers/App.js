import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearchField, requestCats } from "../actions";

import MainPage from "./MainPage";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats()),
  };
};

function App(props) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
