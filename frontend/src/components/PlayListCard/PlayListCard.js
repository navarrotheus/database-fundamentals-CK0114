import React from 'react';
import "./PlayListCard.css"
import {
  Link,
} from "react-router-dom";

import Image from "../../images/default.jpg"
import PlayButton from "../../images/play-arrow-white.png"

export default class PlayListCard extends React.Component { 

  render() {

    let typeList = "playlists"
    let idList = this.props.data['id']
    let nomeList = this.props.data["nome"]

    if(this.props.isAlbum){
      typeList = "albums"
    }


    return(
      <section>
        <section className="card-play-list">
          <div className="plc-image-card">
            <img className="plc-image" src={Image} alt="Image5"/>
            <Link to={`/${typeList}/${idList}`}><img className="plc-play" src={PlayButton} alt="PlayButton" /></Link>
          </div>
          <div className="plc-list-name-container">
            <Link className="plc-list-name" to={`/${typeList}/${idList}`} >{nomeList}</Link>
          </div>

        </section>
      </section>
    )
  }

}