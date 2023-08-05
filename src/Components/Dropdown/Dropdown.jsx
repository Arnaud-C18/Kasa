import React, { useState } from "react";
import "./Dropdown.sass"
import Arrow from "../../Assets/Images/Arrow.png"

export default function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="header" onClick={toggleDropdown}>
                <span>{title}</span>
                <img src={Arrow} alt="Fleche de menu" className={`arrow ${isOpen ? "up" : "down"}`} />
            </div>
            <div className={`content ${isOpen ? "open" : "closed"}`}>
                <div className="text">{content}</div>
            </div>
        </div>
    );
};