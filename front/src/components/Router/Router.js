import React, { Component } from 'react';
import {
  Switch,
  Route,
  useParams
} from "react-router-dom";
import "./Router.css"

import Home from "../Home/Home"
import Biblioteca from "../Biblioteca/Biblioteca"
import Search from "../Search/Search"

const Child = ({match}) => console.log("match", match) || (
    <Biblioteca idList={match.params.id}/>
)

class Router extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Biblioteca" component={Biblioteca} />
        <Route path="/Pesquisar" component={Search} />

        <Route path="/Album/:id" component={Child} />
        <Route path="/PlayList/:id" component={Child} />
      </Switch>
      
    );
  }
}

export default Router;