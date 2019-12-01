import React from 'react';
import {
  Link,
} from "react-router-dom";

import "./MusicOptions.css"

import Image from "../../../images/default.jpg"

// data[0]: Nome da Musica
// data[1]: Interpretes
// data[2]: Autores
// data[3]: Descrição
// data[4]: Gravadora
// data[5]: Periodo Musical


export default class MusicOptions extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      myPlayLists: [],
      myIdPL: "",
    };

    this.onChange = this.onChange.bind(this);
    this.addMusic = this.addMusic.bind(this);
  }

  componentDidMount() {
    fetch(`https://localhost:3333/albums/${this.props.idList}`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        myMusic: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  onChange(event) {
    console.log(this.state.myIdPL)
    this.setState({myIdPL: event.target.value});
    console.log(this.state.myIdPL)
  }

  addMusic(event) {
    const id = this.state.myIdPL
    console.log(id)
    fetch(`http://localhost:3333//playlists/info/${"nome"}`, id)
    .then(response => response.json())
    .then(responseJson => {
      alert('A musica' + "nome" + " foi adicionada com sucesso");
        console.log("nome")
    })
    .catch(error => {
      console.log("Erro de api" + id)
      console.error(error);
    });
  }

  render() {

    let play = [ 
      {id:1, nome: "algum aq1"},
      {id:2, nome: "algum aq2"},
      {id:3, nome: "algum aq3"},
    ]

    const result = play.map(cur => 
      <option value={cur["id"]}>
        {/*window.alert("id:" + cur["id"] + "   Nome: " + cur["nome"]   )*/}
        {cur["nome"]}
      </option>)

    return (
      <div className="alinhar">
        <label>Escolhar uma playlist disponivel: </label>
        <select onChange={this.onChange}>
          <option value=""> Selecione </option>
          {result}
        </select>
        {console.log(play)}
        <button className="liDesc-myButton" onClick={this.addMusic}>Excluir</button>
      </div>
    )
  }
}