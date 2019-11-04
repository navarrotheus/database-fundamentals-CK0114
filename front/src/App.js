import React from 'react';
import './App.css';

import PlayListCard from "./components/PlayListCard/PlayListCard"
import MusicBar from "./components/MusicBar/MusicBar"
import SideBar from "./components/SideBar/SideBar"



function App() {
  return (
    <div>
      <div>
        <SideBar></SideBar>
      </div>
      <div>
        <PlayListCard/>
      </div>
      <div>
        <MusicBar/>
      </div>
    </div>
  );
}

export default App;
