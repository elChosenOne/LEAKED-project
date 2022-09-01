import React from "react";
import "./TablaPublicaciones.css";
import Publicacion from "../Publicacion";

class TablaPublicaciones extends React.Component {
  render() {
    const { publicaciones } = this.props;

    return (
        <div className="TablaPublicaciones">
            {publicaciones.map((pub) => (
                <Publicacion usuario={pub.usuario} fecha={pub.fecha} 
                             texto={pub.texto} id={pub.key}/>
            ))}
        </div>
    );
  }
}

export default TablaPublicaciones;