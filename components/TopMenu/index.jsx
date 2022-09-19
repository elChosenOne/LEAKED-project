import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TopButton from "../TopButton";
import "./TopMenu.css";

function TopMenu(props) {
  const { cookie } = props;
  const history = useHistory;

  return (
    <div className="top-menu">
      <h1 className="title">LEAKED</h1>
      <TopButton cookie={ cookie } texto="Inicio" link="/muro" />
      <TopButton cookie={ cookie } texto="Chats" link="/chats" />
      <TopButton cookie={ cookie } texto="Notificaciones" link="/notificaciones" />
      <TopButton cookie={ cookie } texto="Perfil" link="/perfil" />
    </div>
  );
}

export default TopMenu;
