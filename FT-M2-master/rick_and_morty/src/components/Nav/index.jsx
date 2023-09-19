import React from "react";
import SearchBar from "../SearchBar";

const Nav = ({onSearch}) => {
  return (
    <div>
      <SearchBar 
        // onSearch={(characterID) => window.alert(characterID)}
        onSearch={onSearch}
      />
    </div>
  );
};

export default Nav;
