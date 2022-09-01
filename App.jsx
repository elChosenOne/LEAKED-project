import "./App.css";
import React from "react";
import { useParams, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TopSearch from "./components/TopSearch";
import TopMenu from "./components/TopMenu";
import Muro from "./components/Muro";
import Perfil from "./components/Perfil";

class App extends React.Component {
  render() {
    return (
      <div className="Fondo">
        <Router>
          <TopSearch/>
          <TopMenu/>  
          <Switch>
            <Route exact path="/" children={<LinkMuro />} />
            <Route exact path="/muro" children={<LinkMuro />} />
            <Route exact path="/perfil/:id" children={<LinkPerfil />} />
          </Switch>
        </Router>
      </div>
    );
  }
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