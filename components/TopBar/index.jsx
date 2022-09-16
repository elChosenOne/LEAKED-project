import React from "react";
import TopMenu from "../TopMenu";
import TopSearch from "../TopSearch";
import "./TopBar.css";

function TopBar(props) {
  return (
    <div className="top-bar">
        <TopSearch />
        <TopMenu />
    </div>
  );
}

export default TopBar;
