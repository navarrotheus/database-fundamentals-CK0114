import React from 'react';
import "./SearchBar.css"

import search from "../../../images/Search/search-icon.svg"

export default class SearchBar extends React.Component {
  render(){
    return(
      <div>
        <label className="searchBar-container">
          <img src={search} className="searchBar-search-icon"/>
          <input type="search" id="searchBar-input" placeholder="Busque pelo seu artista preferido"/>
        </label>
      </div>
    )
  }
}