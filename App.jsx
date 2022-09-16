import "./App.css";
import React from "react";
import { useParams, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Muro from "./components/Muro";
import Perfil from "./components/Perfil";

function App() {
  
  return (
    <div className="Fondo">
      <Router>
        <TopBar/>
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

  console.log("ID = "+id);

  return(
    <Perfil />
  )
}

export default App;