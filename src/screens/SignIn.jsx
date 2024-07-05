import React from "react";
import VisualPathsLogo from "../assets/VisualPathsLogo.png";
import "../css/SignIn.css";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiLockPasswordFill } from "react-icons/ri";

function SignIn() {
    return (
        <>
            <div className="sign-in-box">
                <img className="logo" src={VisualPathsLogo}></img>
                <p className="sign-in-label">SIGN IN</p>
                <div className="sign-in-input-fields-container">
                    <div className="sign-in-input-field-container">
                        <input
                            className="username-email-input"
                            type="text"
                            placeholder="Username or email"
                        ></input>
                        <IconContext.Provider
                            value={{
                                color: "white",
                                className: "user-icon",
                            }}
                        >
                            <FaUser />
                        </IconContext.Provider>
                    </div>
                    <div className="sign-in-input-field-container">
                        <input
                            className="password-input"
                            type="password"
                            placeholder="Password"
                        ></input>
                        <IconContext.Provider
                            value={{
                                color: "white",
                                className: "password-icon",
                            }}
                        >
                            <RiLockPasswordFill />
                        </IconContext.Provider>
                    </div>
                </div>
                <button className="sign-in-button">Sign In</button>
                <p className="sign-up-question">Don't have an account yet?</p>
                <button className="sign-up">SIGN UP</button>
            </div>
        </>
    );
}

export default SignIn;
