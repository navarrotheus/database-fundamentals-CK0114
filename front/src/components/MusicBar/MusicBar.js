import React from 'react';

import "./MusicBar.css"

import ReactModal from 'react-modal';
import {
  Link,
} from "react-router-dom";
import MusicDescription from "./MusicDescription/MusicDescription"

import Image from "../../images/default.jpg"
import MusicIcon from "../../images/MusicBar/music-icon.png"
import Play from "../../images/play-arrow-white.png"
import Config from "../../images/MusicBar/config-icon.png"
import Logo from "../../images/logo.png"


// data[0]: Nome da Musica
// data[1]: Interpretes
// data[2]: Autores
// data[3]: Descrição
// data[4]: Gravadora
// data[5]: Periodo Musical

export default class MusicBar extends React.Component { 

  constructor () {
    super();
    this.state = {
      showModal: false,
      musicID: "Id da musica",
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    let name = this.props.data[1].map(cur => 
      <Link className="plc-author-name" to={`/Interprete/${cur}`}> {cur} </Link>
    )

    console.log(this.props.data)

    return(
      <div className="alinhar">
        <section className="mb-bar">

          <div className="mb-head">
            <a href="#">
              <img className="mb-icon " src={MusicIcon}/>
              <img className="mb-icon mb-play" src={Play}/>
            </a>
            <button className="mb-btnDesc" onClick={this.handleOpenModal}>
              <img className="mb-album" src={Image}/>
            </button>
          </div>
          <div>
            <p className="mb-nome">{this.props.data[0]}</p>
            <p className="mb-nome mb-autor"> {name}</p>
          </div>
          <a href="./" className="mb-tail">
            <img className="mb-config" src={Config}/>
          </a>
          <p className="mb-gravadora">{this.props.data[4]}</p>
        </section>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Music Description"
          onRequestClose={this.handleCloseModal}
          className="mb-modal-container"
        >
          <button onClick={this.handleCloseModal} className="mb-modal-closetbtn">X</button>
          <MusicDescription data={this.props.data}/>
        </ReactModal>
      </div>
    )
  }
}