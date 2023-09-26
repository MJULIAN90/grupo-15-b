import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";

const Nav = ({onSearch, logout}) => {
  return (
    <div>
      <SearchBar 
        // onSearch={(characterID) => window.alert(characterID)}
        onSearch={onSearch}
      />
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <Link to={'/about'}>
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
};

export default Nav;
