import React from 'react';
import logo from './logo.svg';
import './App.css';

class Team extends React.Component {
  state = {
    shotsTaken: 0,
    score: 0
  }
  
  shoot = () => {
    const shotTaken = new Audio('./extras/dribble.wav');
    const shotMade = new Audio('./extras/Swish.wav');


    const randomNum = Math.floor(Math.random() * 3) + 1
    this.setState((state)  => ({
      shotsTaken: state.shotsTaken + 1
      
    }))

    
    if (randomNum === 2) {
      this.setState((state) => ({
        score: state.score + 1
      }))
      shotTaken.play()
      
    } else {
      shotMade.play()
    }
  }
      
  render(){
    const { shotsTaken, score } = this.state
    const { name, logo } = this.state

    return (
      <div>
      <img className="logo" src={logo} />
      <h1>{name}</h1>
      <h4>Shots Taken: {shotsTaken}</h4>
      <h4>Score: {score}</h4>
    {shotsTaken ? <h4> Shot Percentage: {Math.floor((score / shotsTaken)* 100)} </h4> : null }
      
      <button onClick={this.shoot}>Shoot</button>
      </div>
    )
  }
  
}

class Game extends React.Component {
  render() {
    const { venue, home, away } = this.props
    return (
        <div className="game">
          <Team name={home.name} logo={home.logo} />
          <Team name={away.name} logo={away.logo} />

      <h1>Welcome to {venue}</h1>
      </div>
    )
  }
}

function App(props) {
  const goons = {
    name: "Goons",
    logo: "./extras/goons.jpg"

  }

  const squad = {
    name: "Squad",
    logo: "./extras/squad.png"
  }
  return (
    <div>
      <Game venue="Goons Arena" home ={goons} away={squad} />
      <Game venue="Squad Arena" home ={squad} away={goons} />
      </div>
   
  );
}

export default App;