import "./App.css";
import React from "react";
import { useParams, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from 'universal-cookie';
import TopBar from "./components/TopBar";
import Muro from "./components/Muro";
import Perfil from "./components/Perfil";

function App() {
  const cookie = new Cookies();

  cookie.set("usr", "1");

  return (
    <div className="Fondo">
      <Router>
        <TopBar cookie={cookie} />
        <Switch>
          <Route exact path="/" children={<LinkMuro />} />
          <Route exact path="/muro" children={<LinkMuro />} />
          <Route exact path="/perfil/:id" children={<LinkPerfil />} />
        </Switch>
      </Router>
    </div>
  );
}

function LinkMuro(){
  return(
    <Muro />
  )
}

function LinkPerfil(){
  const { id } = useParams();

  return(
    <Perfil id={id}/>
  )
}

export default App;