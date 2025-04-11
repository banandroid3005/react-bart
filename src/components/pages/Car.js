import React, { useState, useRef } from "react";
import "./Car.css";
import lexusImage1 from "../../images/lexus.webp";
import lexusImage2 from "../../images/face.webp";
import lexusImage3 from "../../images/lexus.webp";
import { Helmet } from "react-helmet";

function Car() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [lexusImage1, lexusImage2, lexusImage3];
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageRef = useRef(null);
  const lightboxRef = useRef(null);

  const [touchStart, setTouchStart] = useState(null);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStart - touchEnd > swipeThreshold) {
      nextImage(); // Swipe w prawo
    } else if (touchEnd - touchStart > swipeThreshold) {
      prevImage(); // Swipe w lewo
    }

    setTouchStart(null);
  };
  return (
    <div className="car-container">
      <Helmet>
        <title>Auto – Lexus ES300h 2021 – Taxi Premium Kielce</title>
        <meta
          name="description"
          content="Dowiedz się więcej o Lexusie ES300h 2021. Oferujemy usługi premium taxi w Kielcach z komfortowym samochodem."
        />
      </Helmet>
      <h2 className="car-title">Lexus ES300h 2021 - Premium</h2>

      <div
        className="car-gallery"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="arrow prev" onClick={prevImage}>
          &#8249;
        </div>
        <div
          className="image-wrapper"
          onClick={() => openLightbox(currentImage)}
        >
          <img
            src={images[currentImage]}
            alt="Lexus ES300h"
            className="car-img"
          />
        </div>
        <div className="arrow next" onClick={nextImage}>
          &#8250;
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="lightbox"
          ref={lightboxRef}
          onClick={(e) => {
            if (e.target === lightboxRef.current) {
              closeLightbox();
            }
          }}
        >
          <div className="lightbox-content">
            <img
              src={images[currentImage]}
              alt="Lexus ES300h"
              className="lightbox-img"
              draggable="false"
              ref={imageRef}
            />
            <span className="close-btn" onClick={closeLightbox}>
              X
            </span>
            <div
              className="arrow prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#8249;
            </div>
            <div
              className="arrow next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#8250;
            </div>
          </div>
        </div>
      )}

      <div className="car-details">
        <div className="car-info">
          <h3>Podstawowe informacje</h3>
          <div className="info-item">
            <span className="label">Rok produkcji:</span>
            <span className="value">2021</span>
          </div>
          <div className="info-item">
            <span className="label">Marka:</span>
            <span className="value">Lexus</span>
          </div>
          <div className="info-item">
            <span className="label">Model:</span>
            <span className="value">ES300h</span>
          </div>
          <div className="info-item">
            <span className="label">Silnik:</span>
            <span className="value">Hybrydowy 2.5L</span>
          </div>
          <div className="info-item">
            <span className="label">Kolor:</span>
            <span className="value">Biały perłowy</span>
          </div>
        </div>
        <div className="car-comfort">
          <h3>Komfort i wyposażenie</h3>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i> Skórzana tapicerka
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Ogrzewanie i wentylacja
              foteli
            </li>
            <li>
              <i className="fas fa-check-circle"></i> System multimedialny z
              ekranem dotykowym
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Audio premium
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Oświetlenie ambientowe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Car;
