import React from "react";
import { Link,useNavigate } from "react-router-dom";

import './header.css';
import logo from '../../images/logo.png';

export function Navbar() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    async function handlelogout() {
        const response = await fetch('http://localhost:4000/logout', {
            method: 'GET',
        });
        console.log(response);
        if (response.status === 200) {
            localStorage.removeItem('username');
            localStorage.removeItem('id');
            alert("Logged Out Successfully")
            navigate("/");
        }
    }

    return (
        <header>
            <div class="brand">
                <img src={logo} alt="logo"/>
                    <p>Keep - Clone</p>
            </div>
            <p>Hello, {username}</p>
            <Link onClick={handlelogout}>Logout</Link>
        </header>
    )
}
