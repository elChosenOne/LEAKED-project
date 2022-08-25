import React from "react";
import "./TablaPublicaciones.css";
import Publicacion from "../Publicacion";

class TablaPublicaciones extends React.Component {
  render() {
    const { publicaciones } = this.props;

    return (
        <div className="TablaPublicaciones">
            {publicaciones.map((pub) => (
                <Publicacion nombre={pub.nombre} fecha={pub.fecha} texto={pub.texto} data={pub.data} color={pub.color} id={pub.key}/>
            ))}
        </div>
    );
  }
}

export default TablaPublicaciones;