import React from 'react';
import "./BottonBar.css"

import Music from "../../musics/maneva-pisando-descalço.mp3"
import Music2 from "../../musics/armandinho-outra-vida.mp3"
import Music3 from "../../musics/natiruts-perola-negra.mp3"

import MusicPlayer from "./MusicPlayer/MusicPlayer"

export default class BottonBar extends React.Component {
  render() {

    const playList = [Music, Music2, Music3]

    return (
      <div>
        <section className="bb-container">
          <section className="bb-musica-play">
              <MusicPlayer musicList={playList}/>
          </section>
        </section>
       </div>
    )
  }
}
