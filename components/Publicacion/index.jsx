import React from "react";
import uparrow from "../../dist/uparrow-1@1x.5e56ec5b.png";
import downarrow from "../../dist/downarrow-1@1x.74fc2ae1.png";
import comments from "../../dist/comments-1@1x.472e0dad.png";
import "./Publicacion.css";
import Graphics from "../Graphics";

function Publicacion(props) {
  const { usuario, fecha, texto, key } = props;
  usuario.PerfilImage;

  /*const PerfilImage = require('../../dist/img/perfilplaceholder.png');*/
  const images = require.context('../../dist/img', true);
  //const PerfilImage = require(`../../dist/img/${usuario.imagen}`);
  const PerfilImage = images(`./${usuario.imagen}`)

  return (
    <div key={key} className="publicacion border-1px-dove-gray">
      <img className="perfil-placeholder" src={PerfilImage} />
      <h1 className="usuario segoeui-black-dove-gray-30px">{usuario.nombre}</h1>
      <div className="fecha segoeui-regular-normal-dove-gray-25px">{fecha}</div>
      <div className="salto" />
      <div className="contenido segoeui-regular-normal-dove-gray-25px">{texto}</div>
      <img className="up-arrow" src={uparrow} />
      <img className="down-arrow" src={downarrow} />
      <img className="comments" src={comments} />
    </div>
  );
}

export default Publicacion;