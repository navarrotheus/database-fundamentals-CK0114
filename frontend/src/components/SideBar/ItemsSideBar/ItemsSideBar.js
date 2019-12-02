import React from 'react';
import {Link} from "react-router-dom";

import "./ItemsSideBar.css"

import Logo from "../../../images/logo.png"
import Home from "../../../images/SideBar/home-icon.png"
import Album from "../../../images/SideBar/album-icon.png"
import Playlist from "../../../images/SideBar/playlist-icon.png"
import SearchIcon from "../../../images/Search/search-icon-white.svg"


export default class ItemsSideBar extends React.Component {
  render() { 
    return(
      <section className="isb-container">
        <img src={Logo} alt="Logo" className="isb-logo" />
        <section className="isb-itens">
          <img src={Home} className="isb-icon" />
          <Link to="/Home">
            <p className="isb-icon-nome"> Home </p>
          </Link>
        </section>
        <section className="isb-itens">
          <img src={Album} className="isb-icon" />
          <Link to="/Biblioteca">
            <p className="isb-icon-nome"> Sua Biblioteca </p>
          </Link>
        </section>
        <section className="isb-itens">
          <img src={Playlist} className="isb-icon" />
          <Link to="/Playlist">
            <p className="isb-icon-nome"> Playlists </p>
          </Link>
        </section>
        <section className="isb-itens">
          <img src={SearchIcon} className="isb-icon" />
          <Link to="/Pesquisar">
            <p className="isb-icon-nome"> Pesquisar </p>
          </Link>
        </section>
      </section>
    )
  }
}