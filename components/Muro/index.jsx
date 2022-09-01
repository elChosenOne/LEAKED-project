import React from "react";
import TablaPublicaciones from "../TablaPublicaciones";
import DataPublicaciones from "../../data/publicaciones.json";
import "./Muro.css";

class Muro extends React.Component {
  render() {
    const Publs = DataPublicaciones.publicaciones;

    return (
      <div className="muro screen">
        <TablaPublicaciones publicaciones={Publs} />
      </div>
    );
  }
}

export default Muro;
