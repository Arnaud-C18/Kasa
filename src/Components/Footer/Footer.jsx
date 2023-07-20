import React from "react";
import "./Footer.sass"
import KasaWB from "../../Assets/Images/KasaWB.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={KasaWB} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}