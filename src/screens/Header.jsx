import React from "react";
import "../css/Header.css";
import NoTitleLogo from "../assets/NoTitleLogo.png";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="header">
                <nav className="navigation-buttons">
                    <img className="logo-button" src={NoTitleLogo}></img>
                    <p className="info-navigation-button">Info</p>
                    <p classNmae="dfs-navigation-button">DFS</p>
                    <p className="bfs-navigation-button">BFS</p>
                    <p className="dijkstra-navigation-button">Dijkstra</p>
                    <p className="a-star-navigation-button">A*</p>
                    <p className="about-dev-navigation-button">About dev</p>
                </nav>
                <div className="friends-profile-sign-out">
                    <IconContext.Provider
                        value={{
                            color: "white",
                            className: "friends-header-button",
                        }}
                    >
                        <FaUserFriends />
                    </IconContext.Provider>
                    <IconContext.Provider
                        value={{
                            color: "white",
                            className: "profile-header-button",
                        }}
                    >
                        <FaUser />
                    </IconContext.Provider>
                    <button className="sign-out-button">Sign Out</button>
                </div>
            </div>
        </>
    );
}

export default Header;
