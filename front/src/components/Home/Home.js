import React from 'react';
import "./Home.css"

import Image from "../../images/default.jpg"
import PlayListCard from "../PlayListCard/PlayListCard"

export default class Home extends React.Component {

  render(){

    let myAlbum = [
      ["Nome Album", ["Interprete1", "Interprete2"], "IdAlbum"],
      ["Nome Album2", ["Interprete21", "Interprete22"], "IdAlbum2"],
      ["Nome Album3", ["Interprete31", "Interprete32"], "IdAlbum3"],
    ]

    let myPlayList = [
      ["Nome PlayList", "IDPList"],
      ["Nome PlayList2", "IDPList2"],
      ["Nome PlayList3", "IDPList3"],
    ]

    let album = myAlbum.map(cur => <div className="home-pl">
                                      <PlayListCard data={cur} isAlbum={true}/>
                                    </div>
                            )

    let playList = myPlayList.map(cur => <div className="home-pl">
                                            <PlayListCard data={cur} isAlbum={false}/>
                                          </div>
                                  )


    return(
      <div className="alinhar">
        {/* ALBUM */}
        <section className="home-container">
          <section className="home-titulo-container">
            <h3 className="home-titulo">Albuns</h3>
            <p className="home-titulo-desc">Os melhores</p>
            <div className="home-cards-container">
              {album}
            </div>
          </section>

          {/* PLAYLIS */}
          <section className="home-titulo-container">
            <h3 className="home-titulo">PlayLists</h3>
            <p className="home-titulo-desc">Não param de tocar nunca</p>
            <div className="home-cards-container">
              {playList}
            </div>
          </section>

        </section>
      </div>
    )
  }
}