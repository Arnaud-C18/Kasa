import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.sass"
import Logo from "../../Assets/Images/Kasa.png"


export default function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo Kasa" />
            <ul>
                <li><NavLink to="/Kasa">Accueil</NavLink></li>
                <li><NavLink to="/a_propos">A propos</NavLink></li>
            </ul>
        </div>
    )
}