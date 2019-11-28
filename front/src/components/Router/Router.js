import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import "./Router.css"

import Home from "../Home/Home"
import Biblioteca from "../Biblioteca/Biblioteca"
import Search from "../Search/Search"
import Composer from "../Composer/Composer"


function teste(value) {
  switch (value.params.thing) {
    case "Album" || "PlayList":
      return <Biblioteca idList={value.params.id} typeList={value.params.thing}/>
    case "PlayList":
      return <Biblioteca idList={value.params.id} typeList={value.params.thing}/>
    case "Autor":
      return <Composer type={value.params.thing} name={value.params.id}/>
    case "Interprete":
      return <Composer type={value.params.thing} name={value.params.id}/>

  }

}

const Child = ({match}) => console.log("match", match) ||(
    teste(match)
  )

class Router extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Biblioteca" component={Composer} />
        <Route path="/Pesquisar" component={Search} />

        <Route path="/:thing/:id" component={Child} />
      </Switch>
      
    );
  }
}

export default Router;