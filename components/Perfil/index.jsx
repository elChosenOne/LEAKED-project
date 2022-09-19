import React from "react";
import "./Perfil.css";
import DataPerfiles from "../../data/perfiles.json";

function Perfil(props){
  const { id } = props;
  const perfil = DataPerfiles.perfiles.find(perfil => perfil.id == id);

  const PerfilImage = perfil.imagen===""? require('../../dist/img/perfilplaceholder.png'): perfil.imagen;

  //https://www.fakepersongenerator.com/Face/male/male1085174145447.jpg

  console.log(perfil);
  
  return (
    <div className="perfil screen">
      <div className="datos-principales">
        <div className="FondoImage">
          <img className="PerfilImage" src={PerfilImage} />
        </div>
        <h1 className="nombre segoeui-black-dove-gray-30px">{perfil.nombre}</h1>
        <h1 className="correo segoeui-black-dove-gray-30px">{perfil.correo}</h1>
        <h1 className="seguidores segoeui-black-dove-gray-30px">Seguidores: {perfil.seguidores.length}</h1>
        <h1 className="seguidos segoeui-black-dove-gray-30px">Seguidos: {perfil.seguidos.length}</h1>
      </div>
    </div>
  );
}

export default Perfil;