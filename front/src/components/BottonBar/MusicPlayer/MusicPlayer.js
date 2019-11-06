import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import "./MusicPlayer.css"

import Image from "../../../images/default.jpg"
import HeartIcon from "../../../images/BottonBar/heart-icon.svg"
import NextIcon from "../../../images/BottonBar/skip-next-icon.svg"
import PrevIcon from "../../../images/BottonBar/skip-previous-icon.svg"
import PausetIcon from "../../../images/BottonBar/pause-icon.svg"
import RepeatIcon from "../../../images/BottonBar/repeat-icon.svg"
import ShuffleIcon from "../../../images/BottonBar/shuffle-icon.svg"
import PlayIcon from "../../../images/play-arrow-white.svg"

import Music from "../../../musics/maneva-pisando-descalço.mp3"


function log(value) {
  console.log(value); 
}

const style = { width: 400, margin: 0 };

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 20,
      step: 1,
      value: this.props.posAtual,
    };
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({value});
  }
  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  }
  onStepChange = (e) => {
    this.setState({
      step: +e.target.value || 1,
    });
  }

  render(){
    //Mapeia os botões
    var audio = document.getElementsByClassName("test")
    var pauseBtn = document.getElementsByClassName('pauseBtn');
    var playBtn = document.getElementsByClassName('playBtn');
    let nextBtn = document.getElementsByClassName('nextBtn');
    let prevBtn = document.getElementsByClassName('preBtn');

    const teste = audio;

    var playAudio = function(){
      console.log(audio)
      audio.item(0).play();
      playBtn.item(0).style.display = "none";
      pauseBtn.item(0).style.display = "block";
    }

    var pauseAudio = function(){
      audio.item(0).pause();
      playBtn.item(0).style.display = "block";
      pauseBtn.item(0).style.display = "none";
    }
   
    return(
      <div>
        {console.log(audio)}
        {console.log(teste)}
        <div className="bb-musica-play-controle">
          <div className="bb-controler">
            <img className="shuffleBtn mp-musica-play-controle-icons" src={ShuffleIcon} />
            <img className="prevBtn mp-musica-play-controle-icons" src={PrevIcon} />
            <a className="playBtn" onClick={playAudio}>
              <img className="mp-musica-play-controle-icons" src={PlayIcon} />
            </a>
            <a onClick={pauseAudio}>
              <img className="mp-musica-play-controle-icons" src={PausetIcon} />
            </a>
            <img className="nextBtn mp-musica-play-controle-icons" src={NextIcon} />
            <img className="repeatBtn mp-musica-play-controle-icons" src={RepeatIcon} />
          </div>
          <div style={style}>
            <Slider value={this.state.value} min={this.state.min} max={this.state.max} step={this.state.step}
              onChange={this.onSliderChange}
            />
          </div>
        </div>

        <audio ref={this.imageRef} className="test">
          <source src={Music} />
        </audio>
      </div>
    )
  }
}