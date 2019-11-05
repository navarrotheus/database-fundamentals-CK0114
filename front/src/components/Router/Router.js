import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import "./Router.css"

import Home from "../Home/Home"
import MusicBar from "../MusicBar/MusicBar"

class Router extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
      <Switch>
        <Route path="/Home" component={Home} />			
      </Switch>
      
    );
  }
}

export default Router;