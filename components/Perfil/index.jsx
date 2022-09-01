import React from "react";
import "./Perfil.css";

class Perfil extends React.Component {
  render() {

    const UsrId = 1;
    const PerfilImage = require('../../dist/img/perfilplaceholder.png');

    return (
      <div className="perfil screen">
        <div className="FondoImage">
          <img className="PerfilImage" src={PerfilImage} />
        </div>
      </div>
    );
  }
}

export default Perfil;