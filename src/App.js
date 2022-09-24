import './App.css';
import React, { Component } from 'react';
import MainMenu from './pages/main-menu';
import Game from './components/game/game.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      board: false,
      numberOfPlayers: 0
    }
    this.beginState = this.state;
  }
  goToGame = (playersNumber = 1) => {
    this.setState({ numberOfPlayers: playersNumber, board: true });
  }

  goToMainMenu = () => {
    this.setState(this.beginState);
  }

  render() {
    return (
      <div className="App">
        {this.state.board ?
          <Game
            numberOfPlayers={this.state.numberOfPlayers}
            mainMenu={this.goToMainMenu}
          />
          :
          <MainMenu runGame={this.goToGame}
          />}
      </div>
    );
  }
}

export default App;
