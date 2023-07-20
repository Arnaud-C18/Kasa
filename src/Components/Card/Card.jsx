import React from "react";
import "./Card.sass"

export default function Card({ cardSrc, cardTitle }) {
    return (
        <div className="card">
            <img src={cardSrc} alt={cardTitle} />
            <p>{cardTitle}</p>
        </div>
    );
};