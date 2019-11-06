import React from 'react';
import "./Home.css"

import Image from "../../images/default.jpg"
import PlayListCard from "../PlayListCard/PlayListCard"

export default class Home extends React.Component {

  render(){
    return(
      <div className="alinhar">
        <section className="home-container">
          <section className="home-titulo-container">
            <h3 className="home-titulo">PlayLists Recentes</h3>
            <p className="home-titulo-desc">Não saem dos seus ouvidos</p>
            <div className="home-cards-container">
              <div className="home-pl">
                <PlayListCard />
              </div>
              <div className="home-pl">
                <PlayListCard />
              </div>
              <div className="home-pl">
                <PlayListCard />
              </div>
            </div>
          </section>

        </section>
      </div>
    )
  }
}