import React from "react";
import {Link} from "react-router-dom"
import "./Card.sass"

export default function Card({ cardLink, cardSrc, cardTitle }) {
    return (
        <div className="card">
            <Link className="cardLink" to={cardLink}>
                <img src={cardSrc} alt={cardTitle} />
                <p>{cardTitle}</p>
            </Link>
        </div>
    );
};