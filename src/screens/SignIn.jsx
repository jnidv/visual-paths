import React from "react";
import VisualPathsLogo from "../assets/VisualPathsLogo.png";
import "../css/SignIn.css";

function SignIn() {
    return (
        <>
            <div className="sign-in-box">
                <div className="logo-container">
                    <img className="logo" src={VisualPathsLogo}></img>
                </div>
                <p className="sign-in-label">SIGN IN</p>
                <div className="input-fields-container">
                    <input
                        className="username-email-input"
                        type="text"
                        placeholder="Username or email"
                    ></input>
                    <input
                        className="password-input"
                        type="password"
                        placeholder="Password"
                    ></input>
                </div>
                <button className="sign-in-button">Sign In</button>
                <p className="question">Don't have an account yet?</p>
                <button className="sign-up">SIGN UP</button>
            </div>
        </>
    );
}

export default SignIn;
