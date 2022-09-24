import React, { Component } from "react";
import "./main-menu-styles.css"
import ticImage from "../assets/Tic_tac_toe.png"
class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <div className="image-container">
                    <img src={ticImage} alt="tic-tac-toe" className="image" />
                    <h1 className="title">tic-tac-toe</h1>
                </div>
                <span className="option" onClick={() => this.props.runGame(1)}>1 player</span>
                <span className="option" onClick={() => this.props.runGame(2)}>2 players</span>
            </div>
        )

    }
}
export default MainMenu;
//yu pui tsuen 