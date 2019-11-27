import React from 'react';
import "./Biblioteca.css"

import logo from "../../images/logo.png"

import MusicBar from "../MusicBar/MusicBar"

export default class Biblioteca extends React.Component {


  render(){

    let myMusics = [
      ["Nome da Musica1", ["Interprete1", "interprete2"], 
       ["autor1", "autor2"],"descrição1", "Gravadora1", "Periodo musical" 
      ],
      ["Nome da Musica2", ["Interprete21", "interprete22"], 
       ["autor21", "autor22"],"descrição2", "Gravadora2", "Periodo musical2" 
      ],
      ["Nome da Musica3", ["Interprete31", "interprete32"], 
      ["autor31", "autor32"],"descrição3", "Gravadora3", "Periodo musical3" 
     ],
    ]
        
    let musicas = myMusics.map(cur => <MusicBar data={cur}/>)

    return(
      <div className="alinhar b-background">
        <section className="b-container" >
          <section className="b-titulo-container">
            <h1 className="b-titulo">Minhas músicas</h1>
          </section>
            {musicas}
        </section>
      </div>
    )
  }
}