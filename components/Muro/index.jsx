import React from "react";
import TablaPublicaciones from "../TablaPublicaciones";
import DataPublicaciones from "../../data/publicaciones.json";
import "./Muro.css";

function Muro(props){
  const Publs = DataPublicaciones.publicaciones;

  return (
    <div className="muro screen">
      <TablaPublicaciones publicaciones={Publs} />
    </div>
  );
}

export default Muro;
