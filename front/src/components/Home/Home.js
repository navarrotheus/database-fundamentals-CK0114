import React from 'react';
import "./Home.css"

import Image from "../../images/default.jpg"
import PlayListCard from "../PlayListCard/PlayListCard"

export default class Home extends React.Component {

  state = {
    error : null,
    playlist: [],
    albums: []
  }

  componentDidMount() {
    fetch('https://localhost:3333/albums')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        albums: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
    fetch('https://localhost:3333/playlist')
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

    const teste = [
      {
        "id": 3,
        "nome": "MinhaPlaylist"
      },
      {
        "id": 4,
        "nome": "rgrtr"
      },
      {
        "id": 5,
        "nome": "rgaartr"
      },
    ]

    let requestAlbums = teste //this.state.albums
    let requestPlaylist = teste //this.state.playlist

    let myAlbum = requestAlbums.map(cur => 
      <div className="home-pl">
        <PlayListCard data={cur} isAlbum={true}/>
      </div>
      )

    let myPlayList = requestPlaylist.map(cur => 
      <div className="home-pl">
        <PlayListCard data={cur} isAlbum={true}/>
      </div>
      )

    return(
      <div className="alinhar">
        {/* ALBUM */}
        <section className="home-container">
          <section className="home-titulo-container">
            <h3 className="home-titulo">Albuns</h3>
            <p className="home-titulo-desc">Os melhores</p>
            <div className="home-cards-container">
              {myAlbum}
            </div>
          </section>
          {console.log(teste[1])}
          {/* PLAYLIS */}
          <section className="home-titulo-container">
            <h3 className="home-titulo">PlayLists</h3>
            <p className="home-titulo-desc">Não param de tocar nunca</p>
            <div className="home-cards-container">
              {myPlayList}
            </div>
          </section>

        </section>
      </div>
    )
  }
}