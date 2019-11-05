import React from 'react';
import "./BottonBar.css"

import Image from "../../images/default.jpg"
import HeartIcon from "../../images/BottonBar/heart-icon.svg"
import NextIcon from "../../images/BottonBar/skip-next-icon.svg"
import PrevIcon from "../../images/BottonBar/skip-previous-icon.svg"
import PausetIcon from "../../images/BottonBar/pause-icon.svg"
import RepeatIcon from "../../images/BottonBar/repeat-icon.svg"
import ShuffleIcon from "../../images/BottonBar/shuffle-icon.svg"


export default class BottonBar extends React.Component {
  render() {
    return (
      <div>
        <section className="bb-container">
          <section className="bb-musica-atual">
            <img className="bb-musica-atual-capa" src={Image} />
            <div className="bb-musica-atual-nome">
              <p>O menino da porteira</p>
              <p>Sergio Reis</p>
            </div>
            <div className="bb-musica-atual-icons">
              <img src={HeartIcon} />
            </div>
          </section>

          <section className="bb-musica-play">
            <div className="bb-musica-play-controle">
              <img src={ShuffleIcon} />
              <img src={PrevIcon} />
              <img src={PausetIcon} />
              <img src={NextIcon} />
              <img src={RepeatIcon} />
            </div>
            <div>
              slidebar
            </div>
          </section>
          <section>
            valume
          </section>
        </section>
       </div>
    )
  }
}
