import React from 'react';
import { BrowserRouter} from "react-router-dom";

import './App.css';

import PlayListCard from "./components/PlayListCard/PlayListCard"
import MusicBar from "./components/MusicBar/MusicBar"
import SideBar from "./components/SideBar/SideBar"
import BottonBar from "./components/BottonBar/BottonBar"
import Router from "./components/Router/Router"

function App() {
  return (
    <div className="site-container">
      <BrowserRouter>
        <SideBar/>
      </BrowserRouter>
      <BottonBar/>      
    </div>
      
  );
}

export default App;
