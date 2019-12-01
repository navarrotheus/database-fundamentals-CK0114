import React from 'react';
import {Link} from "react-router-dom";

import "./AddPlayList.css"


export default class AddPlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
    this.addPlayList = this.addPlayList.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  addPlayList(event) {
    const nome = this.state.value
    event.preventDefault();
    fetch(`http://localhost:3333//playlists/info/${nome}`, nome)
    .then(response => response.json())
    .then(responseJson => {
      alert('A playlist' + nome + " foi criada com sucesso");
        console.log(nome)
    })
    .catch(error => {
      console.log("Erro de api")
      console.error(error);
    });
  }

  render() {

    return(
      <form className="addPlayList-container" ref="forms-addPL">
        {console.log(this.state)}
        <label className="addPlayList-label"> Qual o nome da PlayList: </label>
        <input ref="nomePL" id="addPlayList-input" type="text" onChange={this.onChange} />
        <button ref="addPlaylist-button" className="addPlayList-button" onClick={this.addPlayList} >Criar</button>
      </form>
    )
  }
}