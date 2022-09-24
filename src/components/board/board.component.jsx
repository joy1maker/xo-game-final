import React, { Component } from "react";
import "./board.styles.css"
import Square from "../square/square.component";
import { calculateWinner, getRandomValidPostion } from "../../utils/app.utils";
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            oScore: 0,
            xScore: 0
        };
        this.beginState = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
        this.numberOfPlayers = this.props.numberOfPlayers;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    resetBoard = (winner) => {
        if (winner === 'X') {
            this.setState({ ...this.beginState, oScore: this.state.oScore, xScore: this.state.xScore + 1 });
        }
        else if (winner === 'O') {
            this.setState({ ...this.beginState, oScore: this.state.oScore + 1, xScore: this.state.xScore });
        }
        else {
            this.setState({ ...this.beginState, oScore: this.state.oScore, xScore: this.state.xScore });
        }
    }


    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        if (!this.state.xIsNext && !winner && this.numberOfPlayers === 1) {
            const pos = getRandomValidPostion(this.state.squares);
            const squares = this.state.squares.slice();
            squares[pos] = 'O';
            this.setState({
                squares: squares,
                xIsNext: true,
            });
        }

        return (
            <div>
                <div className="back" onClick={this.props.mainMenu}>&#8592; main menu</div>
                <div className="status">{status}</div>
                <div className="player x">x score : {this.state.xScore}</div>
                <div className="player o">o score : {this.state.oScore}</div>
                {
                    winner || !this.state.squares.includes(null) ?
                        <div className="reset" onClick={() => this.resetBoard(winner)}>reset ?</div>
                        :
                        null
                }
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;