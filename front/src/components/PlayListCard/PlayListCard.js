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
    // data[0]: Nome da Lista
    // data[1]: Interprestes
    // data[2]: Id do Album
    //PlayList
    // data[0]: Nome da PList
    // data[1]: Id PList

    let name
    let typeList = "PlayList"
    let idList = this.props.data[1]

    if(this.props.isAlbum){
      name = this.props.data[1].map(cur => 
          <Link className="plc-author-name" to={`/Interprete/${cur}`}> {cur} </Link>
        )
      typeList = "Album"
      idList = this.props.data[2]
    }


    return(
      <section>
        <section className="card-play-list">
          <div className="plc-image-card">
            <img className="plc-image" src={Image} alt="Image5"/>
            <Link to={`/${typeList}/${idList}`}><img className="plc-play" src={PlayButton} alt="PlayButton" /></Link>
          </div>
          <div className="plc-list-name-container">
            <Link className="plc-list-name" to={`/${typeList}/${idList}`} >{this.props.data[0]}</Link>
          </div>
          <div className="plc-list-name-container">
            <div className="plc-author-name-container">
              {name}
            </div>
          </div>
         
        </section>
      </section>
    )
  }

}