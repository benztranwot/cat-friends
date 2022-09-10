import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestCats } from "../actions";

import MainPage from "./MainPage";
import "./App.css";

export interface Cat {
  name: string;
  id: number;
  email: string;
  username: string;
}

export interface AppProps {
  cats: Array<Cat>;
  onRequestCats: Function;
  searchField: string;
  onSearchChange: any;
  isPending: boolean;
}

interface State {
  searchCats: {
    searchField: string;
  };
  requestCats: {
    cats: Array<Cat>;
    isPending: boolean;
    error: string;
  };
}

const mapStateToProps = (state: State) => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSearchChange: (event: any): void => dispatch(setSearchField(event.target.value)),
    onRequestCats: (): void => dispatch(requestCats()),
  };
};

function App(props: AppProps): JSX.Element {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
