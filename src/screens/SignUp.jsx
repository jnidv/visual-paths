import React from "react";
import "../css/SignUp.css";

function SignUp() {
    return (
        <>
            <div className="sign-up-box">
                <p className="sign-up-label">SIGN UP</p>
                <div className="sign-up-input-fields-container">
                    <input
                        className="first-name-input"
                        type="text"
                        placeholder="First name"
                    ></input>
                    <input
                        className="middle-name-input"
                        type="text"
                        placeholder="Middle name (optional)"
                    ></input>
                    <input
                        className="last-name-input"
                        type="text"
                        placeholder="Last name"
                    ></input>
                    <input
                        className="email-input"
                        type="email"
                        placeholder="Email"
                    ></input>
                    <input
                        className="password-input"
                        type="password"
                        placeholder="Password"
                    ></input>
                    <input
                        className="repeat-password-input"
                        type="password"
                        placeholder="Repeat password"
                    ></input>
                </div>
                <button className="sign-up-button">Sign Up</button>
                <p className="sign-in-question">Already have an account?</p>
                <button className="sign-in">SIGN IN</button>
            </div>
        </>
    );
}

export default SignUp;
