import React from 'react';
import "./MusicCurrentCard.css"

import HeartIcon from "../../../images/BottonBar/heart-icon.svg"

export default class MusicCurrentCard extends React.Component {
  render() {
    return (
      <div>
        <section className="mcc-musica-atual">
          <img className="mcc-musica-atual-capa" src={this.props.imageMusic} />
          <div className="mcc-musica-atual-nome">
            <p>{this.props.nameMusic}</p>
            <p>{this.props.authorMusic}</p>
          </div>
          <div className="mcc-musica-atual-icons">
            <img src={HeartIcon} />
          </div>
        </section>
       </div>
    )
  }
}




