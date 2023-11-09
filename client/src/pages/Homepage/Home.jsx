import React from "react";
import { Link } from "react-router-dom";

import './Homepage.css';

export function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Google Keep Clone</h1>
            <div className="inner-home-container">
                <Link className="link" to='/login'>
                    Login to your Account
                </Link>
                <Link className="link" to='/register'>
                    Create an Account
                </Link>
            </div>
        </div>
    )
}