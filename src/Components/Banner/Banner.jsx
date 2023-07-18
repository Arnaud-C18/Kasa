import React from "react";
import "./Banner.sass"

export default function Banner( {imageSource} , {imageAlt}) {
    return (
        <div className="banner">
            <img src={imageSource} alt={imageAlt} />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}