import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import "./Router.css"

import Home from "../Home/Home"
import Biblioteca from "../Biblioteca/Biblioteca"
import MusicBar from "../MusicBar/MusicBar"
import Search from "../Search/Search"

class Router extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Biblioteca" component={Biblioteca} />
        <Route path="/Pesquisar" component={Search} />
      </Switch>
      
    );
  }
}

export default Router;