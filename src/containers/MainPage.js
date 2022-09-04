import React, { useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "tachyons";

function MainPage({ cats, onRequestCats, searchField, onSearchChange, isPending }) {
  useEffect(() => {
    onRequestCats();
  }, []);

  const filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="tc lh-title">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f-headline lh-title main-title">Cat Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList data-testid="card-list" cats={filteredCats} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default MainPage;
