import React from "react";
import { Link } from "react-router-dom";
import "./TopButton.css";
import Cookies from "universal-cookie";

function TopButton(props) {
  const { cookie, texto , link } = props;
  const cook = new Cookies(cookie);

  if (link == "/perfil"){
    return (
      <Link className="overlap-group" to={'/perfil/'+cook.get("usr")}>
        <div className="top-back" ></div>
        <div className="texto sitkatext-regular-normal-masala-30px">{texto}</div>
      </Link>
    );
  }else{
    return (
      <Link className="overlap-group" to={link}>
        <div className="top-back" ></div>
        <div className="texto sitkatext-regular-normal-masala-30px">{texto}</div>
      </Link>
    );
  }
}

export default TopButton;
