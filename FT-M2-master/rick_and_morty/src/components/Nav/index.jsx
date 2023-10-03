import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";
import { Button } from "../../styles";

const Nav = ({ onSearch, logout }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SearchBar
        // onSearch={(characterID) => window.alert(characterID)}
        onSearch={onSearch}
      />
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Link to={"/home"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/about"}>
          <Button>About</Button>
        </Link>
        <Link to={"/about"}>
          <Button onClick={logout}>Logout</Button>
        </Link>
        <Link to={"/Favorites"}>
          <Button>Favorites</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
