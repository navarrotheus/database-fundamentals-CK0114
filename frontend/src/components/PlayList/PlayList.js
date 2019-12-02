import React from 'react';
import ReactModal from 'react-modal';
import "./PlayList.css"

import AddPlayList from "./AddPlayList/AddPlayList"

import plusIcon from "../../images/plus-icon.svg"
import image from "../../images/default.jpg"
import PlayListCard from "../PlayListCard/PlayListCard"

export default class PlayList extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false,
      playlist: [],
      error: null
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
    fetch('http://localhost:3333/playlists')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        playlist: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render(){

    let requestPlaylist = this.state.playlist

    let myPlayList = requestPlaylist.map(cur => 
      <div className="home-pl">
        <PlayListCard data={cur} isAlbum={false}/>
      </div>
      )

    return(
      <div className="alinhar">
        <section className="home-container">
          <section className="home-titulo-container">
            <h3 className="home-titulo"> Adicionar PlayList</h3>
            <div className="home-cards-container">
              <section className="card-play-list">
                <div className="plc-image-card">
                  <img className="plc-image" src={image} alt="Image5"/>
                  <button className="b-btnDesc" onClick={this.handleOpenModal}>
                    <img className="plc-play" src={plusIcon} alt="PlayButton" />
                  </button>
                </div>
              </section>
            </div>
          </section>
        </section>
        <section className="home-container">
          {/* PLAYLIS */}
          <section className="home-titulo-container">
            <h3 className="home-titulo"> Suas PlayLists</h3>
            <div className="home-cards-container">
              {myPlayList}
            </div>
          </section>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="List Description"
            onRequestClose={this.handleCloseModal}
            className="b-modal-container addPlayList-modal"
            overlayClassName="modal-overlay"

          >
            <button className="b-modal-closetbtn" onClick={this.handleCloseModal}>X</button>
            <AddPlayList/>
          </ReactModal>
        </section>
      </div>
    )
  }
}