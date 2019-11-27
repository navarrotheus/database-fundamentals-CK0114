import React from 'react';
import "./Biblioteca.css"

import logo from "../../images/logo.png"

import ReactModal from 'react-modal';

import MusicBar from "../MusicBar/MusicBar"
import LibraryDescription from "./LibraryDescription/LibraryDescription"


export default class Biblioteca extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false,
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

  render(){

    let myAlbum = [
      "Nome do Album1", "ID Album1", "ID Gravadora1", "Descrição1",
      "Data de compra1", "Tipo de compra1", "Preço da compra1" 
    ]

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
      ["Nome da Musica3", ["Interprete31", "interprete32"], 
       ["autor31", "autor32"],"descrição3", "Gravadora3", "Periodo musical3" 
      ],
    ]
        
    let musicas = myMusics.map(cur => <MusicBar data={cur}/>)

    return(
      <div className="alinhar b-background">
         <h1>{this.props.idList} </h1>
        <section className="b-container" >
          <section className="b-titulo-container">
            <h1 className="b-titulo">{myAlbum[0]}</h1>
          </section>
          <button className="b-btnDesc" onClick={this.handleOpenModal}>
              <p>+info</p>
          </button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="List Description"
            onRequestClose={this.handleCloseModal}
            className="b-modal-container"
          >
            <button className="b-modal-closetbtn" onClick={this.handleCloseModal}>X</button>
            <LibraryDescription data={myAlbum} isAlbum={true}/>
          </ReactModal>
            {musicas}
        </section>
      </div>
    )
  }
}