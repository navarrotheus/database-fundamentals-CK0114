import React from 'react';
import "./PlayListCard.css"

import Image from "../../images/default.jpg"
import PlayButton from "../../images/PlayListCard/play-button.png"

export default class PlayListCard extends React.Component { 

  render() {

    return(
      <section>
        <section className="card-play-list">
          <div className="plc-image-card">
            <img className="plc-image" src={Image} alt="Image5"/>
            <a href="./"><img className="plc-play" src={PlayButton} alt="PlayButton" /></a>
          </div>
          <p> List Name </p>
        </section>
      </section>
    )
  }

}