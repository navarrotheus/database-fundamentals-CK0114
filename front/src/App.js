import React from 'react';
import { BrowserRouter} from "react-router-dom";

import './App.css';

import PlayListCard from "./components/PlayListCard/PlayListCard"
import MusicBar from "./components/MusicBar/MusicBar"
import SideBar from "./components/SideBar/SideBar"
import NavBar from "./components/NavBar/NavBar"
import Router from "./components/Router/Router"

function App() {
  return (
      <BrowserRouter>
          <SideBar/>
           
      </BrowserRouter>
  );
}

export default App;
