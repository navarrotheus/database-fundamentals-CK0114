import React from 'react';
import {
  Link,
} from "react-router-dom";

import "./MusicOptions.css"

import Image from "../../../images/default.jpg"

export default class MusicOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myPlayLists: [],
      myMusicId: "",
      myIdPL: "",
      idPLatual: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3333/playlists`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        myPlayLists: responseJson,
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  onChange(event) {
    console.log("this.state.myIdPL")
    this.setState({myIdPL: event.target.value});
    console.log(this.state.myIdPL)
  }

  render() {

    function addMusic(musicId, plId) {
      console.log("aqaqaq")
      console.log(plId)
      console.log(musicId)
      fetch(`http://localhost:3333/playlists/${musicId}/${plId}`, {
        method: 'post'
      })
      .then(response => response.json())
      .catch(error => {
        console.log("Erro de api")
        console.error(error);
      })
      document.location.reload(true);

    }

    function removeMusic(musicId, plId) {
      console.log("=> " + musicId + "  " + plId + " <=")
      fetch(`http://localhost:3333/playlists/${musicId}/${plId}`, {
        method: 'delete'
      })
      .then(response => response.json())
      .catch(error => {
        console.log("Erro de api" + plId)
        console.error(error);
      })
      document.location.reload(true);

    }
 
    let aaaa = <></> 

    if(this.props.typeList === "playlists") {
      aaaa =
        <button id="er" className="liDesc-myButton" onClick={()=>removeMusic(this.props.idMusic, this.props.idList)}>remover da PlayList</button>
    }

    let play = this.state.myPlayLists 


    const result = play.map(cur => 
      <option value={cur["id"]}>
        {cur["nome"]}
      </option>)

    return (
      <div className="alinhar">
        <label>Escolhar uma playlist disponivel: </label>
        <select onChange={this.onChange}>
          <option value=""> Selecione </option>
          {result}
        </select>
        {console.log(this.state)}
        <button id="eyr" className="liDesc-myButton" onClick={()=>addMusic(this.props.idMusic,this.state.myIdPL)}>ADD</button>
        {aaaa}
      </div>
    )
  }
}