import React from "react";
import "./Banner.sass"

export default function Banner({ imageSource, imageAlt, bannerText}) {
    return (
        <div className="banner">
            <img src={imageSource} alt={imageAlt} />
            <p>{bannerText}</p>
        </div>
    )
}