import React from 'react';
import Sidebar from "react-sidebar";

import Content from "./ItemsSideBar/ItemsSideBar"
import Image from "../../images/default.jpg"

export default class SideBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<Content/>}
        open={this.state.sidebarOpen}
        docked={false}
        onSetOpen={this.onSetSidebarOpen}  
        styles={{ sidebar: { background: "#282828" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}
