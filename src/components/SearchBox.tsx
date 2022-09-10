import React from "react";
import "tachyons";

interface SearchBoxProps {
  searchChange(event: React.FormEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green b-lightest-blue"
        type="search"
        placeholder="search cats"
        onChange={searchChange}
        data-testid="search-box"
      />
    </div>
  );
};

export default SearchBox;
