import React, { useState } from "react";
import "./Info.sass"
import ActiveStar from "../../Assets/Images/ActiveStar.png";
import InactiveStar from "../../Assets/Images/InactiveStar.png";


export default function Info({selectedProduct}) {
    const [firstName, lastName] = selectedProduct.host.name.split(" ");
    const [showArrows] = useState(selectedProduct.pictures.length > 1)
    const ratingValue = selectedProduct.rating;
    
    const attributes = selectedProduct.tags.map((attribute, index) => (
        <span key={index} className="attribute">
            {attribute}
        </span>
    ))

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starImage = i <= ratingValue ? ActiveStar : InactiveStar;
        stars.push(<img key={i} src={starImage} alt="star" className="star" />);
    }

    return (
            <div className="info">
                <div className="description">
                    <p className="productTitle">{selectedProduct.title}</p>
                    <p className="productLocation">{selectedProduct.location}</p>
                    <div className="attributes">
                        {attributes}
                    </div>
                </div>
                <div className="owner">
                    <div className="identity">
                        <div className="name">
                            <div>{firstName}</div>
                            <div>{lastName}</div>
                        </div>
                        <img src={selectedProduct.host.picture} alt="Propriétaire" />
                    </div>
                    <div className="ratings">
                        {stars}
                    </div>
                </div>
            </div>
    );
}