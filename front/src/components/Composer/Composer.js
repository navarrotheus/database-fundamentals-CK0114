import React, { Component } from 'react';
import "./Composer.css"

class Composer extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {

    let composer = <section className="author-container">
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Nome do cara: </p>
                      <p className="musicDesc-answer">{"Aqui nome"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Id do Cara: </p>
                      <p className="musicDesc-answer">{"Outro aq"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Tipo do cara: </p>
                      <p className="musicDesc-answer">{"Aqui alfog"}</p>
                    </div>
                  </section>

    if (this.props.type == "Autor"){
      composer = <section className="author-container">
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Nome do cara: </p>
                      <p className="musicDesc-answer">{"Aqui nome"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Id do Cara: </p>
                      <p className="musicDesc-answer">{"Outro aq"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >País de origem: </p>
                      <p className="musicDesc-answer">{"Aqui alfog"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Cidade de origem: </p>
                      <p className="musicDesc-answer">{"Aqui nome"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Data de nascimento: </p>
                      <p className="musicDesc-answer">{"Outro aq"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Data de morte: </p>
                      <p className="musicDesc-answer">{"Aqui alfog"}</p>
                    </div>
                    <div className="musicDesc-label">
                      <p className="musicDesc-question" >Periodo musical: </p>
                      <p className="musicDesc-answer">{"Aqui alfog"}</p>
                    </div>                                    
                    <div className="libDesc-gravadora">
                      <div className="libDesc-label">
                        <p className="libDesc-question" > Descrição: </p>
                        <p className="libDesc-answer">{"Aqui alfog"}</p>
                      </div>
                      <div className="libDesc-label">
                        <p className="libDesc-question" > Período de tempo: </p>
                        <p className="libDesc-answer">{"Aqui alfog"}</p>
                      </div>
                    </div>

                </section>
    }

    return (
      <div className="alinhar">
        {composer}
      </div>
    );
  }
}

export default Composer;