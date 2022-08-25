import React from "react";
import { useState } from "react";
import TopSearch from "../TopSearch";
import TopMenu from "../TopMenu";
import TablaPublicaciones from "../TablaPublicaciones";
import "./Web19201.css";

class Web19201 extends React.Component {
  render() {
    const fecha = Date.now();
    const hoy = new Date(fecha);
    const texto = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto." + 
                 " Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, " +
                 "cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una" + 
                 " galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen." + 
                 " No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos" + 
                 " electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la" + 
                 " creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más" + 
                 " recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    const Publs = [
      {
        nombre: "GenNom1", 
        fecha: hoy.toLocaleDateString(),
        texto: texto, 
        data: [
          {
            name: "Page A",
            val: 150
          },
          {
            name: "Page B",
            val: 200
          },
          {
            name: "Page C",
            val: 10
          }
        ],
        color: "red",
        key: 1
      }, 
      {
        nombre: "GenNom2", 
        fecha: hoy.toLocaleDateString(), 
        texto: "texto 2", 
        data: [
          {
            name: "Lun",
            val: 10
          },
          {
            name: "Mar",
            val: 12
          }
        ],
        color: "blue",
        key: 2
      }
    ];
    const { topSearchProps, topMenuProps } = this.props;

    return (
      <div className="muro screen">
        <TopSearch
          inputType={topSearchProps.inputType}
          inputPlaceholder={topSearchProps.inputPlaceholder}
          buscar={topSearchProps.buscar}
        />
        <TopMenu
          title={topMenuProps.title}
          grupo11Props={topMenuProps.grupo11Props}
          grupo12Props={topMenuProps.grupo12Props}
          grupo13Props={topMenuProps.grupo13Props}
          grupo14Props={topMenuProps.grupo14Props}
        />
        <TablaPublicaciones publicaciones={Publs} />
      </div>
    );
  }
}

export default Web19201;
