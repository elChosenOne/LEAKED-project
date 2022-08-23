import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web19201 from "./components/Web19201";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|muro)">
            <Web19201 topSearchProps={web19201Data.topSearchProps} topMenuProps={web19201Data.topMenuProps} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const topSearchData = {
    inputType: "text",
    inputPlaceholder: "Busqueda",
    buscar: "Buscar",
};

const grupo11Data = {
    inicio: "Inicio",
};

const grupo12Data = {
    inicio: "Chats",
};

const grupo13Data = {
    inicio: "Notificaciones",
};

const grupo14Data = {
    inicio: "Perfil",
};

const topMenuData = {
    title: "LEAKED",
    grupo11Props: grupo11Data,
    grupo12Props: grupo12Data,
    grupo13Props: grupo13Data,
    grupo14Props: grupo14Data,
};

const web19201Data = {
    topSearchProps: topSearchData,
    topMenuProps: topMenuData,
};

