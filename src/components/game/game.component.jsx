import React, { Component } from "react";
import "./game.styles.css"
import Board from "../board/board.component";
class Game extends Component {


    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board numberOfPlayers={this.props.numberOfPlayers} mainMenu={this.props.mainMenu} />
                </div>
            </div>
        );
    }
}
export default Game;