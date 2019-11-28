import React from 'react';
import {
  Link,
} from "react-router-dom";

import "./MusicDescription.css"

import Image from "../../../images/default.jpg"

// data[0]: Nome da Musica
// data[1]: Interpretes
// data[2]: Autores
// data[3]: Descrição
// data[4]: Gravadora
// data[5]: Periodo Musical


export default class MusicDescription extends React.Component {
  render() {

    let nameInter = this.props.data[1].map(cur => 
      <Link className="plc-author-name" to={`/Interprete/${cur}`}> {cur} </Link>
    )
    
    let nameAuthor = this.props.data[2].map(cur => 
      <Link className="plc-author-name" to={`/Autor/${cur}`}> {cur} </Link>
    )

    return (
      <div className="alinhar">
        <section className="musicDesc-container">
          <img className="musicDesc-image" src={Image} />

            <div className="musicDesc-label">
              <p className="musicDesc-question" >Nome da Musica: </p>
              <p className="musicDesc-answer">{this.props.data[0]}</p>
            </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Nome do Interprete:</p>
            <p className="musicDesc-answer">{nameInter}</p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Nome do Autor:</p>
            <p className="musicDesc-answer">{nameAuthor}</p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Tipo de composição:</p>
            <p className="musicDesc-answer">{"Em manutenção"} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Tempo de execução:</p>
            <p className="musicDesc-answer">{"Em manutenção"} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Descrição:</p>
            <p className="musicDesc-answer"> {this.props.data[3]} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Tipo de gravação:</p>
            <p className="musicDesc-answer">{this.props.data[4]} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >TPeriodo Musical:</p>
            <p className="musicDesc-answer">{this.props.data[5]} </p>
          </div>
        </section>
      </div>
    )
  }
}