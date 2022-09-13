import React from "react";
import "./TablaPublicaciones.css";
import Publicacion from "../Publicacion";

function TablaPublicaciones(props) {
  const { publicaciones } = props;

  return (
    <div className="TablaPublicaciones">
          {publicaciones.map((pub) => (
            <Publicacion usuario={pub.usuario} fecha={pub.fecha} 
                         texto={pub.texto} id={pub.key}/>
          ))}
    </div>
  );
}

export default TablaPublicaciones;