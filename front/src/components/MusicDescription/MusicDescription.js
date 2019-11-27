import React from 'react';
import "./MusicDescription.css"

import Image from "../../images/default.jpg"

export default class MusicDescription extends React.Component {
  render() {
    return (
      <div className="alinhar">
        <section className="musicDesc-container">
          <img className="musicDesc-image" src={Image} />

          <div className="musicDesc-label">
            <p className="musicDesc-question" >Nome da Musica: </p>
            <p className="musicDesc-answer">{"MusicName"}</p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Nome do Interprete:</p>
            <p className="musicDesc-answer">{"Interprete1, Interprete2..."}</p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Nome do Autor:</p>
            <p className="musicDesc-answer">{"Autor1, Autor2..."}</p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Albuns que contem</p>
            <p className="musicDesc-answer">{"Album1, Album2..."} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >PLay list que contem:</p>
            <p className="musicDesc-answer">{"PlayList1, PlayList2..."} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Descrição:</p>
            <p className="musicDesc-answer"> {" de até 50 caracteres 1212121212121212"} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >Tipo de gravação:</p>
            <p className="musicDesc-answer">{"DDD"} </p>
          </div>
          <div className="musicDesc-label">
            <p className="musicDesc-question" >TPeriodo Musical:</p>
            <p className="musicDesc-answer">{"Barroco"} </p>
          </div>
        </section>
      </div>
    )
  }
}