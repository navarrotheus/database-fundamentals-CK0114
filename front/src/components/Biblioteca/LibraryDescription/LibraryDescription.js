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
    myPlayList: []
  }

  componentDidMount() {
    fetch(`http://localhost:3333/${"tipo"}/infos`, "id aq")
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        myPlayList: responseJson
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  removePlayLis() {
    let id = "ID AQ"
    let nome = "nome aq"
    fetch(`http://localhost:3333//UMA ROTA AQ`, id)
    .then(response => response.json())
    .then(responseJson => {
      alert('A playlist' + nome + " foi criada com sucesso");
        console.log(id)
    })
    .catch(error => {
      console.log("Erro de api")
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

    let desc = 
      <div className="libDesc-container">
        {this.myLabel("Nome da PlayList:", this.props.data[0] )}
        {this.myLabel("Data de Criação:", this.props.data[0] )}
        {this.myLabel("Tempo Total:", this.props.data[0] )}
        <button className="liDesc-myButton" onClick={this.removePlayLis}>Escluir</button>
      </div>

    if(this.props.type === "Album"){
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