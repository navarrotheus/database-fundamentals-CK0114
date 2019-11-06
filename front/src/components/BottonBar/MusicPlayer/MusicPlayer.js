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
  state = {
      min: 0,
      max: 0,
      step: 1,
      value: 1,
      tempoAtual: "", 
      tempoMax: "",
      isPaused: true,
      iniciou: false,
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

  componentDidMount = () => {
    var audio = document.getElementsByClassName("audio-player")
    this.setState({value: audio.item(0).currentTime})
    console.log(audio.item(0).duration)

  }
  
  playAudio = () => {
    let audio = document.getElementsByClassName("audio-player")
    audio.item(0).play()
    audio.item(0).addEventListener("play", () => {
      this.setState({max: audio.item(0).duration})
      this.setState({tempoMax: new Date(this.state.max * 1000).toISOString().substr(14, 5)})
      this.setState({isPaused: false})
      console.log(this.state)
      setInterval(() => {
        this.setState({value: audio.item(0).currentTime})
        this.setState({tempoAtual: new Date(this.state.value * 1000).toISOString().substr(14, 5)})
      }, 1000);
    })
    
  }

  pauseAudio = () => {
    var audio = document.getElementsByClassName("audio-player")
    audio.item(0).pause();
    this.setState({isPaused: true});
  }

  loopAudio = () => {
    var audio = document.getElementsByClassName("audio-player")
    audio.item(0).setAttribute("loop", true);
    console.log(audio)
  }

  nextAudio = () => {
    var audio = document.getElementsByClassName("audio-player")
  }

  render(){
    //Mapeia os botões
    var pauseBtn = document.getElementsByClassName('pauseBtn');
    var playBtn = document.getElementsByClassName('playBtn');
    let nextBtn = document.getElementsByClassName('nextBtn');
    let prevBtn = document.getElementsByClassName('preBtn');

    let mainButton;

    if(!this.state.isPaused){
      mainButton = <a className="pauseBtn" onClick={this.pauseAudio}>
        <img className="mp-musica-play-controle-icons" src={PausetIcon} />
      </a> 
    }

    if(this.state.isPaused){
      mainButton = <a className="playBtn" onClick={this.playAudio}>
                    <img className="mp-musica-play-controle-icons" src={PlayIcon} />
                  </a>
    }

    return(
      <div>
        <div className="bb-musica-play-controle">
          <div className="bb-controler">
            <img className="shuffleBtn mp-musica-play-controle-icons" src={ShuffleIcon} />
            <img className="prevBtn mp-musica-play-controle-icons" src={PrevIcon} />
            {mainButton}            
            <img className="nextBtn mp-musica-play-controle-icons" src={NextIcon} />
            <a onClick={this.loopAudio}>
              <img className="repeatBtn mp-musica-play-controle-icons" src={RepeatIcon} />
            </a>
          </div>
          <div className="bb-slider-bar" style={style}>
            <p className="bb-tempo">{this.state.tempoAtual}</p>
            <div>
              <Slider trackStyle={{ backgroundColor: '#00d95f' }} handleStyle={{borderColor: 'transparent', }}
                value={this.state.value} min={this.state.min} max={this.state.max} step={this.state.step}
                onChange={this.onSliderChange}
              />
            </div>
            <p className="bb-tempo">{this.state.tempoMax}</p>
          </div>
        </div>

        <audio ref={this.imageRef} className="audio-player">
          <source src={Music} />
        </audio>
      </div>
    )
  }
}