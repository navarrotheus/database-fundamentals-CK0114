import React from 'react';
import "./PlayListCard.css"
import {
  Link,
} from "react-router-dom";

import Image from "../../images/default.jpg"
import PlayButton from "../../images/play-arrow-white.png"

export default class PlayListCard extends React.Component { 

  render() {

    //Album
    // data[0]: ID da 
    // data[1]: Nome do Album

    // data[~]: Interprestes (por enquanto não vamos mostrar os interpretes)
    //PlayList
    // data[0]: Nome da PList
    // data[1]: Id PList

    let typeList = "PlayList"
    let idList = this.props.data['id']

    if(this.props.isAlbum){
      typeList = "Album"
    }


    return(
      <section>
        <section className="card-play-list">
          <div className="plc-image-card">
            <img className="plc-image" src={Image} alt="Image5"/>
            <Link to={`/${typeList}/${idList}`}><img className="plc-play" src={PlayButton} alt="PlayButton" /></Link>
          </div>
          <div className="plc-list-name-container">
            <Link className="plc-list-name" to={`/${typeList}/${idList}`} >{this.props.data["nome"]}</Link>
          </div>
        
         
        </section>
      </section>
    )
  }

}