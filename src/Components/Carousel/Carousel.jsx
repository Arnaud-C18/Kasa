import React, { useState } from "react";
import "./Carousel.sass"
import Arrow from "../../Assets/Images/Arrow.png"


export default function Carousel({ selectedProduct }) {
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

    return (
        <div className="carousel">
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
    );
}