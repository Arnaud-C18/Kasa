import React, { useState } from "react";
import "./Product.sass"
import Arrow from "../../Assets/Images/Arrow.png"
import ActiveStar from "../../Assets/Images/ActiveStar.png";
import InactiveStar from "../../Assets/Images/InactiveStar.png";


export default function Product({selectedProduct}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const counterValue = currentIndex + 1;
    const [firstName, lastName] = selectedProduct.host.name.split(" ");
    const [showArrows] = useState(selectedProduct.pictures.length > 1)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? selectedProduct.pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === selectedProduct.pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const attributes = selectedProduct.tags.map((attribute, index) => (
        <span key={index} className="attribute">
            {attribute}
        </span>
    ))

    const ratingValue = selectedProduct.rating;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const starImage = i <= ratingValue ? ActiveStar : InactiveStar;
        stars.push(<img key={i} src={starImage} alt="star" className="star" />);
    }

    return (
        <div className="product">
            <div className="slidersContainer">
                <img src={selectedProduct.pictures[currentIndex]} alt="" />
                {showArrows ? (
                <div className="arrowsContainer">
                    <img className="left" src={Arrow} alt="Précédente" onClick={goToPrevious} />
                    <img className="right" src={Arrow} alt="Suivante" onClick={goToNext} />
                </div>
                ) : null}
                <div className="counter">
                    <span>{counterValue}/{selectedProduct.pictures.length}</span>
                </div>
            </div>
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
        </div>
    );
}