import React from 'react';
import {Link} from "react-router-dom";

import "./AddPlayList.css"


export default class AddPlayList extends React.Component {


  addPlayList() {
    let nome = this.ref.nomePl.value
    window.alert("aq")
  }

  render() {

    return(
      <form className="addPlayList-container" ref="forms-addPL">
        <label className="addPlayList-label"> Qual o nome da PlayList: </label>
        <input ref="nomePL" id="addPlayList-input"/>
        <button ref="addPlaylist-button" className="addPlayList-button" onClick={this.addPlayList} >Criar</button>
      </form>
    )
  }
}