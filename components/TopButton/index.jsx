import React from "react";
import { Link } from "react-router-dom";
import "./TopButton.css";

function TopButton(props) {
  const { texto , link } = props;
  if (link == "/perfil"){
    return (
      <Link className="overlap-group" to={'perfil/1'}>
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
