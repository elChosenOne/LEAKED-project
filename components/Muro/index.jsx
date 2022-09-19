import React from "react";
import TablaPublicaciones from "../TablaPublicaciones";
import DataPublicaciones from "../../data/publicaciones.json";
import "./Muro.css";
import Cookies from "universal-cookie";
import DataPerfiles from "../../data/perfiles.json";

function Muro(props){
  const { cook } = props;
  const cookie = new Cookies(cook);
  const id = cookie.get("usr");
  const perfil = DataPerfiles.perfiles.find(perfil => perfil.id == id);

  const Publs = DataPublicaciones.publicaciones;
  const FPubls = Publs.filter(val => perfil.seguidos.indexOf(val.usuario.id) != -1);

  return (
    <div className="muro screen">
      <TablaPublicaciones publicaciones={FPubls} />
    </div>
  );
}

export default Muro;
