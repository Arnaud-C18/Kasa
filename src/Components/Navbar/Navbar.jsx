import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.sass"
import Logo from "../../Assets/Images/Kasa.png"


export default function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo Kasa" />
            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/a_propos">A propos</Link></li>
            </ul>
        </div>
    )
}