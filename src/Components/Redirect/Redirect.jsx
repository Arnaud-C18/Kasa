import React from "react";
import {Link} from "react-router-dom"
import "./Redirect.sass"

export default function Navbar() {
    return (
        <div className="redirect">
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}