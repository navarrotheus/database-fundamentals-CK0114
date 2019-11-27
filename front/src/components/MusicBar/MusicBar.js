import React from 'react';

import "./MusicBar.css"

import {
  Link,
  Switch,
  Route,
} from "react-router-dom";

import Image from "../../images/default.jpg"
import Music from "../../images/MusicBar/music-icon.png"
import Play from "../../images/play-arrow-white.png"
import Config from "../../images/MusicBar/config-icon.png"
import Logo from "../../images/logo.png"


export default class MusicBar extends React.Component { 
  
  state = {
    pagina: "Biblioteca"
  }
  render() {

    let teste = `${this.state.pagina}/teste`;
    return(
      <div className="alinhar">
        <section className="mb-bar">

          <div className="mb-head">
            <a href="#">
              <img className="mb-icon " src={Music}/>
              <img className="mb-icon mb-play" src={Play}/>
            </a>
            <a href="#">
              <img className="mb-album" src={Image}/>
            </a>
          </div>
          <div>
            <p className="mb-nome">{this.props.musicName}</p>
            <p className="mb-nome mb-autor"> {this.props.authorName}</p>
          </div>
          <a href="./" className="mb-tail">
            <img className="mb-config" src={Config}/>
          </a>
          <p className="mb-gravadora">{this.props.recording}</p>
        </section>
      </div>
    )
  }
}