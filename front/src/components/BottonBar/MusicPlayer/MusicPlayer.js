import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import "./MusicPlayer.css"

import MusicCurrentCard from "../MusicCurrentCard/MusicCurrentCard"

import NextIcon from "../../../images/BottonBar/skip-next-icon.svg"
import PrevIcon from "../../../images/BottonBar/skip-previous-icon.svg"
import PausetIcon from "../../../images/BottonBar/pause-icon.svg"
import RepeatIcon from "../../../images/BottonBar/repeat-icon.svg"
import ShuffleIcon from "../../../images/BottonBar/shuffle-icon.svg"
import PlayIcon from "../../../images/play-arrow-white.svg"

import Image from "../../../images/default.jpg"

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
      faixaAtual: 0,
  }

  onSliderChange = (value) => {
    var audio = document.getElementsByClassName("audio-player")
    log(value)
    this.setState({value})
    audio.item(0).currentTime = this.state.value
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
    console.log(audio.length)
  }
  
  playAudio = () => {
    let audio = document.getElementsByClassName("audio-player")
    console.log(audio.item(0))
    audio.item(0).play()
    audio.item(0).addEventListener("play", () => {
      if(!this.state.iniciou){
        this.setState({max: audio.item(0).duration})
        this.setState({tempoMax: new Date(this.state.max * 1000).toISOString().substr(14, 5)})
        this.setState({iniciou: true})
      }
      this.setState({isPaused: false})
      if(this.state.value < this.state.max){
        setInterval(() => {
          this.setState({value: audio.item(0).currentTime})
          this.setState({tempoAtual: new Date(this.state.value * 1000).toISOString().substr(14, 5)})
        }, 1000);
      } else {
        this.setState({max: 0})
        this.setState({tempoMax: new Date(this.state.max * 1000).toISOString().substr(14, 5)})
        audio.item(0).currentTime = 0
        console.log("teste")
        this.setState({iniciou: false})
      }
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
  }

  previousAudio = () => {
    let audio = document.getElementsByClassName("audio-player")
    this.setState({faixaAtual: this.state.faixaAtual - 1})
    audio.item(0).load()
    audio.item(0).play()
  }

  nextAudio = () => {
    let audio = document.getElementsByClassName("audio-player")
    this.setState({faixaAtual: this.state.faixaAtual + 1})
    audio.item(0).load()
    audio.item(0).play()
  }

  render(){

    const playList = this.props.musicList

    const currentMusic = playList[this.state.faixaAtual]

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
      <div className="mp-container">

        <MusicCurrentCard nameMusic={"Nome da Musica"} authorMusic={"Nome do Autor"} imageMusic={Image}/>

        <div className="mp-musica-play-controle">
          <div className="mp-controler">
            <img className="shuffleBtn mp-musica-play-controle-icons" src={ShuffleIcon} />
            <a onClick={this.previousAudio}>
              <img className="prevBtn mp-musica-play-controle-icons" src={PrevIcon} />
            </a>
            {mainButton}  
            <a onClick={this.nextAudio} >
              <img className="nextBtn mp-musica-play-controle-icons" src={NextIcon} />
            </a> 
            <a onClick={this.loopAudio}>
              <img className="repeatBtn mp-musica-play-controle-icons" src={RepeatIcon} />
            </a>
          </div>
          <div className="mp-slider-bar" style={style}>
            <p className="mp-tempo">{this.state.tempoAtual}</p>
            <div>
              <Slider trackStyle={{ backgroundColor: '#00d95f' }} handleStyle={{borderColor: 'transparent', }}
                value={this.state.value} min={this.state.min} max={this.state.max} step={this.state.step}
                onChange={this.onSliderChange}
              />
            </div>
            <p className="mp-tempo">{this.state.tempoMax}</p>
          </div>
        </div>

        <audio ref={this.imageRef} className="audio-player">
          <source src={currentMusic} />
        </audio>
      </div>
    )
  }
}