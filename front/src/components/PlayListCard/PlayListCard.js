import React from 'react';
import "./PlayListCard.css"

import Image from "../../images/default.jpg"
import PlayButton from "../../images/PlayListCard/play-button-white.png"

export default class PlayListCard extends React.Component { 

  render() {

    return(
      <section>
        <section className="card-play-list">
          <div className="plc-image-card">
            <img className="plc-image" src={Image} alt="Image5"/>
            <a href="./"><img className="plc-play" src={PlayButton} alt="PlayButton" /></a>
          </div>       
          <p className="plc-list-name"><a href="./"> List Name </a></p>
          <p className="plc-author-name"><a href="./"> Author Name </a></p>
          
        </section>
      </section>
    )
  }

}