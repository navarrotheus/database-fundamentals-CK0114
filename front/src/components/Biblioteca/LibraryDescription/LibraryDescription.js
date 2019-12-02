import React, { Component } from 'react';

import "./LibraryDescription.css"


// data[0]: Nome do Album
// data[1]: Id do Album
// data[2]: Gravadora
// data[3]: Descrição
// data[4]: Data de Compra
// data[5]: Tipo de Compra
// data[6]: Valor da Compra


class LibraryDescription extends Component {
  
  state = {
    myPlayList: [],
    nome: "",
    data: "",
    duracao: "",
    id: 0
  }

  componentDidMount() {
    const typeList = this.props.typeList
    const id = this.props.idList
    console.log("lllllllllllllllll")
    console.log(id)
    console.log(typeList)
    fetch(`http://localhost:3333/${typeList}/infos/${id}`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        myPlayList: responseJson[0],
        nome: responseJson[0]["nome_playlist"],
        data: responseJson[0]["data_playlist"],
        duracao: responseJson[0]["tempo_playlist"],
      });
      console.log(this.state.myPlayList)
    })
    .catch(error => {
      console.error(error);
    });
  }

  myLabel(quest, answer) {
    return <div className="libDesc-label">
              <p className="libDesc-question" >{quest} </p>
              <p className="libDesc-answer">{answer}</p>
          </div>
  }

  render() {

    let delet = () => {
      const idPl =this.props.idList
      console.log("KKKKKKKKKKKKKKKkk")
      console.log(idPl)
      fetch(`http://localhost:3333/playlists/${idPl}`, {
        method: 'delete'
      })
      .then(response => response.json())
      .then(responseJson => {
        alert("removido com sucesspo");
          console.log(idPl)
      })
      .catch(error => {
        console.log("Erro de api")
        console.error(error);
      });

    }

     let desc = 
        <div className="libDesc-container">
          {this.myLabel("Nome da PlayList:", this.state.nome )}
          {this.myLabel("Data de Criação:", this.state.data )}
          {this.myLabel("Tempo Total:", this.state.duracao )}
          <button className="liDesc-myButton" onClick={delet}>Excluir</button>
        </div>

    if(this.props.typeList === "albums"){
      console.log(this.state.myPlayList)
      desc =<div className="libDesc-container">
        {this.myLabel("Nome do Album:", this.props.data[0])}
        {this.myLabel("ID do Album:", this.props.data[1])}
        {this.myLabel("ID Gravadora:", this.props.data[2])}
        <div className="libDesc-gravadora">
          {this.myLabel("Nome da Gravadora:", this.props.data[0])}
          {this.myLabel("Homepage Gravadora:", this.props.data[0])}
          {this.myLabel("CEP Gravadora:", this.props.data[0])}
          {this.myLabel("Endereço:", "Rua Numero" )}
          {this.myLabel("Telefones:", this.props.data[0])}
          {this.myLabel("teste", this.props.data[0])}
          {this.myLabel("teste", this.props.data[0])}
        </div>
        {this.myLabel("Descrição:", this.props.data[3])}
        {this.myLabel("Data de compra:", this.props.data[4])}
        {this.myLabel("Tipo de compra:", this.props.data[5])}
        {this.myLabel("Preço da compra:", this.props.data[6])}
      </div>
    }

    return (
      <div>
        <section>
          {desc}
        </section>
      </div>
    );
  }
}

export default LibraryDescription;