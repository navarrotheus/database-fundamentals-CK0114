import React from 'react';

import "./MusicBar.css"

import ReactModal from 'react-modal';
import {
  Link,
} from "react-router-dom";
import MusicDescription from "./MusicDescription/MusicDescription"
import MusicOptions from "./MusicOptions/MusicOptions"

import Image from "../../images/default.jpg"
import MusicIcon from "../../images/MusicBar/music-icon.png"
import Play from "../../images/play-arrow-white.png"
import Config from "../../images/MusicBar/config-icon.png"
import Logo from "../../images/logo.png"

export default class MusicBar extends React.Component { 

  constructor () {
    super();
    this.state = {
      showModal: false,
      showConfig: false,
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.openConfig = this.openConfig.bind(this);
    this.closeConfig = this.closeConfig.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  openConfig() {
    this.setState({showConfig: true})
  }
  closeConfig() {
    this.setState({showConfig: false})
  }

  render() {

    //let name = this.props.data[1].map(cur => 
      //<Link className="plc-author-name" to={`/Interprete/${cur}`}> {cur} </Link>
    //)

    /*
      {
        id_faixa: 1,
        nome_faixa: "teste",
        tipo_faixa: "DDD"
      },
    */

    let musica = this.props.data
    let typeList = this.props.typeList

    console.log("testes =================")
    console.log(musica)

    return(
      <div className="alinhar">
        <section className="mb-bar">

          <div className="mb-head">
            <a href="#">
              <img className="mb-icon " src={MusicIcon}/>
              <img className="mb-icon mb-play" src={Play}/>
            </a>
            <button className="mb-btnDesc" onClick={"this.handleOpenModal"}>
              <img className="mb-album" src={Image}/>
            </button>
          </div>
          <div>
            <p className="mb-nome">{musica["nome_faixa"]}</p>
            {/*<p className="mb-nome mb-autor"> {name}</p>*/}
          </div>
          <a onClick={this.openConfig} className="mb-tail">
            <img className="mb-config" src={Config}/>
          </a>
          <p className="mb-gravadora">{musica["tipo_faixa"]}</p>
        </section>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Music Description"
          onRequestClose={this.handleCloseModal}
          className="mb-modal-container"
          overlayClassName="modal-overlay"

        >
          <button onClick={this.handleCloseModal} className="mb-modal-closetbtn">X</button>
          <MusicDescription data={musica}/>
        </ReactModal>
        <ReactModal
          isOpen={this.state.showConfig}
          contentLabel="Music Description"
          onRequestClose={this.closeConfig}
          className="mb-modal-container"
          overlayClassName="modal-overlay"
        >
          <button onClick={this.closeConfig} className="mb-modal-closetbtn">X</button>
          {console.log("=====> "+ this.props.idList + "<=======")}
          <MusicOptions idList={this.props.idList} typeList={typeList} idMusic={musica["id_faixa"]} />
        </ReactModal>
      </div>
    )
  }
}