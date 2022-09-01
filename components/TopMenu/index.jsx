import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TopButton from "../TopButton";
import "./TopMenu.css";

class TopMenu extends React.Component {
  render() {
    const history = useHistory;

    return (
      <div className="top-menu">
        <h1 className="title">LEAKED</h1>
        <TopButton texto="Inicio" link="/muro" />
        <TopButton texto="Chats" link="/chats" />
        <TopButton texto="Notificaciones" link="/notificaciones" />
        <TopButton texto="Perfil" link="/perfil" />
      </div>
    );
  }
}

export default TopMenu;
