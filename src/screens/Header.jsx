import React from "react";
import "../css/Header.css";
import NoTitleLogo from "../assets/NoTitleLogo.png";

function Header() {
    return (
        <>
            <div className="header">
                <nav className="navigation-buttons">
                    <img className="logo-button" src={NoTitleLogo}></img>
                    <p>Info</p>
                    <p>DFS</p>
                    <p>BFS</p>
                    <p>Dijkstra</p>
                    <p>A*</p>
                    <p>About dev</p>
                </nav>
            </div>
        </>
    );
}

export default Header;
