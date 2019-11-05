import React from 'react';
import "./SideBar.css"

import ItemsSideBar from "./ItemsSideBar/ItemsSideBar"
import Image from "../../images/default.jpg"
import Router from "../Router/Router"

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side-container">
        <section className="sb-container">
          <ItemsSideBar/>
        </section>
        <Router/>

      </div>
    );
  }
}
