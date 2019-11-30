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
      listMusic: []
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

  componentDidMount() {
    fetch(`https://localhost:3333/albums/${this.props.idList}`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        listMusic: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render(){

    let myAlbum = [
      "Nome do Album1", "ID Album1", "ID Gravadora1", "Descrição1",
      "Data de compra1", "Tipo de compra1", "Preço da compra1" 
    ]

    let myMusics = [
      [{
        id_faixa: 1,
        nome_faixa: "teste",
        tipo_faixa: "DDD"
      }],
      [{
        id_faixa: 2,
        nome_faixa: "teste2",
        tipo_faixa: "DDx"
      }],      [{
        id_faixa: 3,
        nome_faixa: "teste3",
        tipo_faixa: "DDz"
      }],
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
            <LibraryDescription data={myAlbum} type={this.props.typeList}/>
          </ReactModal>
            {musicas}
        </section>
      </div>
    )
  }
}