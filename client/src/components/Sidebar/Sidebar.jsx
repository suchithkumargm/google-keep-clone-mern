import React from "react";

import './sidebar.css';
import hamburger from "../../images/hamburger.svg";
import close from "../../images/close.svg";

export function Sidebar(props) {

    return (
        <>
            <input type="checkbox" id="sidebar-checkbox" />
            <label for="sidebar-checkbox" id="sidebar-hamburger"><img src={hamburger} alt="hamburger"/></label>
            <label for="sidebar-checkbox" id="sidebar-close"><img src={close} alt="hamburger"/></label>
            <div class="sidebar">
                <ul>
                    <li>Note</li>
                    <li>To Do</li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </>
    )
}