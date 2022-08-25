import React from "react";
import uparrow from "../../dist/uparrow-1@1x.5e56ec5b.png";
import downarrow from "../../dist/downarrow-1@1x.74fc2ae1.png";
import comments from "../../dist/comments-1@1x.472e0dad.png";
import perfilplaceholder from "../../dist/perfilplaceholder-1@1x.dce7175b.png";
import "./Publicacion.css";
import BarGraph from "../BarGraph";

class Publicacion extends React.Component {
  render() {
    const { nombre, fecha, texto, data, color, key } = this.props;

    return (
      <div key={key} className="publicacion border-1px-dove-gray">
        <img className="perfil-placeholder" src={perfilplaceholder} />
        <h1 className="usuario segoeui-black-dove-gray-30px">{nombre}</h1>
        <div className="fecha segoeui-regular-normal-dove-gray-25px">{fecha}</div>
        <div className="salto" />
        <div className="contenido segoeui-regular-normal-dove-gray-25px">{texto}</div>
        <div className="bloque-grafico">
          <BarGraph data={data} color={color}/>
        </div>
        <img className="up-arrow" src={uparrow} />
        <img className="down-arrow" src={downarrow} />
        <img className="comments" src={comments} />
      </div>
    );
  }
}

export default Publicacion;