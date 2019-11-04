import React from 'react';
import "./ItemsSideBar.css"

import Logo from "../../../images/logo.png"
import Home from "../../../images/SideBar/home-icon.png"
import Album from "../../../images/SideBar/album-icon.png"
import Playlist from "../../../images/SideBar/playlist-icon.png"


export default class ItemsSideBar extends React.Component {
  render() { 
    return(
      <section className="isb-container">
        <img src={Logo} alt="Logo" className="isb-logo" />
        
        <section className="isb-itens">
          <img src={Home} className="isb-icon" />
          <a href="./">
            <p className="isb-icon-nome"> Home </p>
          </a>
        </section>
        <section className="isb-itens">
          <img src={Album} className="isb-icon" />
          <a href="./">
            <p className="isb-icon-nome"> Sua Biblioteca </p>
          </a>
        </section>
        <section className="isb-itens">
          <img src={Playlist} className="isb-icon" />
          <a href="./">
            <p className="isb-icon-nome"> Playlists </p>
          </a>
        </section>
      </section>
    )
  }
}