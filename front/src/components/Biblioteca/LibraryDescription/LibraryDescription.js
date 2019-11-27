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
  
  render() {

    let desc = 
      <div className="libDesc-container">
          <div className="libDesc-label">
              <p className="libDesc-question" >Nome da PlayList: </p>
              <p className="libDesc-answer">{this.props.data[0]}</p>
          </div>
          <div className="libDesc-label">
                  <p className="libDesc-question" >Data de Criação: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
          </div>
          <div className="libDesc-label">
                  <p className="libDesc-question" >Tempo Total: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
              </div>
      </div>

    if(this.props.isAlbum){
      desc =<div className="libDesc-container"> 
              <div className="libDesc-label">
                  <p className="libDesc-question" >Nome do Album: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
              </div>
              <div className="libDesc-label">
                  <p className="libDesc-question" >ID do Album: </p>
                  <p className="libDesc-answer">{this.props.data[1]}</p>
              </div>
              <div className="libDesc-label">
                    <p className="libDesc-question" >ID Gravadora: </p>
                    <p className="libDesc-answer">{this.props.data[2]}</p>
              </div>
              <div className="libDesc-gravadora">
                <div className="libDesc-label">
                  <p className="libDesc-question" > Nome da Gravadora: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
                </div>
                <div className="libDesc-label">
                  <p className="libDesc-question" >Homepage Gravadora: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
                </div>
                <div className="libDesc-label">
                  <p className="libDesc-question" > CEP Gravadora: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
                </div>
                <div className="libDesc-label">
                  <p className="libDesc-question" >Endereço: </p>
                  <p className="libDesc-answer">{"Rua"} {"Numero"} </p>
                </div>
                <div className="libDesc-label">
                  <p className="libDesc-question" >Telefones Gravadora: </p>
                  <p className="libDesc-answer">{this.props.data[0]}</p>
                </div>
              </div>
              <div className="libDesc-label">
                  <p className="libDesc-question" >Descrição: </p>
                  <p className="libDesc-answer">{this.props.data[3]}</p>
              </div>
              <div className="libDesc-label">
                  <p className="libDesc-question" >Data de compra: </p>
                  <p className="libDesc-answer">{this.props.data[4]}</p>
              </div>
              <div className="libDesc-label">
                  <p className="libDesc-question" >Tipo de compra: </p>
                  <p className="libDesc-answer">{this.props.data[5]}</p>
              </div>
              <div className="libDesc-label">
                  <p className="libDesc-question" >Preço da compra: </p>
                  <p className="libDesc-answer">{this.props.data[6]}</p>
              </div>
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