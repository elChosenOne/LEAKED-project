import React from "react";
import TopButton from "../TopButton";
import "./TopMenu.css";

class TopMenu extends React.Component {
  render() {
    const { title, grupo11Props, grupo12Props, grupo13Props, grupo14Props } = this.props;

    return (
      <div className="top-menu">
        <h1 className="title">{title}</h1>
        <TopButton inicio={grupo11Props.inicio} />
        <TopButton inicio={grupo12Props.inicio} />
        <TopButton inicio={grupo13Props.inicio} />
        <TopButton inicio={grupo14Props.inicio} />
      </div>
    );
  }
}

export default TopMenu;
