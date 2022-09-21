import React from "react";
import "./InicioSesion.css";

function InicioSesion(props){

  return (
    <div className="inicio-sesion">
        <div className="fondo border-1px-dove-gray">
            <div className="overlap-group4 border-1px-dove-gray">
                <input
                    className="usuario_inicio-sesion sitkatext-regular-normal-masala-20px"
                    name="usuario"
                    placeholder="Usuario"
                    type="text"
                />
            </div>
            <div className="overlap-group6 border-1px-dove-gray">
                <input
                    className="contrasenna sitkatext-regular-normal-masala-20px"
                    name="contrasenna"
                    placeholder="Contraseña"
                    type="text"
                />
            </div>
        </div>
    </div>
  );
}

export default InicioSesion;
