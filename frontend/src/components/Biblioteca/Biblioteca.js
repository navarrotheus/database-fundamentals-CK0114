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
    console.log(this.props.typeList)
    if(this.props.typeList === "Biblioteca"){
      fetch(`http://localhost:3333/biblioteca`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listMusic: responseJson
        })
      })
      .catch(error => {
        console.error(error);
      });
    }
    else{
      fetch(`http://localhost:3333/${this.props.typeList}/${this.props.idList}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listMusic: responseJson
        });
      })
      .catch(error => {
        console.log("aaqqqqqqqqqqqq")
        console.error(error);
      });
    }
  }

  render(){

    let myMusics = this.state.listMusic
    console.log(myMusics);
        
    let musicas = myMusics.map(cur => <MusicBar idList={this.props.idList} typeList={this.props.typeList} data={cur}/>)
    let nome = this.props.typeList

    let info = <button className="b-btnDesc" onClick={this.handleOpenModal}>
                <p>+info</p>
              </button>
    
    if (this.props.typeList === "Biblioteca"){
      info = <></>
    }

    return(
      <div className="alinhar b-background">
        <section className="b-container" >
          <section className="b-titulo-container">
          <h1 className="b-titulo">{nome}</h1>
          </section>
          {info}
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="List Description"
            onRequestClose={this.handleCloseModal}
            className="b-modal-container"
            overlayClassName="modal-overlay"
          >
            <button className="b-modal-closetbtn" onClick={this.handleCloseModal}>X</button>
            <LibraryDescription data={0} idList={this.props.idList} typeList={this.props.typeList}/>
          </ReactModal>
            {musicas}
        </section>
      </div>
    )
  }
}