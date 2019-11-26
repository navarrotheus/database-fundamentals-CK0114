import React from 'react';
import "./Search.css"

import logo from "../../images/logo.png"

import SearchBar from "./SearchBar/SearchBar"

export default class Search extends React.Component {
  render(){
    return(
      <div className="alinhar">
        <SearchBar/> 
      </div>
    )
  }
}