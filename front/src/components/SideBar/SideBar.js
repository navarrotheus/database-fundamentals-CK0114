import React from 'react';
import "./SideBar.css"

import Content from "./ItemsSideBar/ItemsSideBar"
import Image from "../../images/default.jpg"
import Router from "../Router/Router"


export default class SideBar extends React.Component {
  render() {
    return (
      <div className="site-container">
        <section className="sb-container">
          <Content/>
        </section>
        <Router/>
      </div>
    );
  }
}
