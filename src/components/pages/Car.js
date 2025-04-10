import React, { useState, useRef } from "react";
import "./Car.css";
import lexusImage1 from "../../images/lexus.webp";
import lexusImage2 from "../../images/lexus.webp";
import lexusImage3 from "../../images/lexus.webp";
import { Helmet } from "react-helmet";

function Car() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [lexusImage1, lexusImage2, lexusImage3];
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageRef = useRef(null);

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

  const handleDrag = (e) => {
    const image = imageRef.current;
    const rect = image.getBoundingClientRect();
    const offsetX = e.clientX - image.startX;
    const offsetY = e.clientY - image.startY;

    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    const clampedX = Math.min(0, Math.max(maxX, offsetX));
    const clampedY = Math.min(0, Math.max(maxY, offsetY));

    image.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
  };

  const startDrag = (e) => {
    const image = imageRef.current;
    image.startX = e.clientX - image.offsetLeft;
    image.startY = e.clientY - image.offsetTop;

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    const image = imageRef.current;
    image.style.transition = "transform 0.3s ease";
    image.style.transform = `translate(0px, 0px)`;
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
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

      <div className="car-gallery">
        <div className="arrow prev" onClick={prevImage}>
          &#8249;
        </div>
        <div className="image-wrapper" onClick={() => openLightbox(currentImage)}>
          <img src={images[currentImage]} alt="Lexus ES300h" className="car-img" />
        </div>
        <div className="arrow next" onClick={nextImage}>
          &#8250;
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img
              src={images[currentImage]}
              alt="Lexus ES300h"
              className="lightbox-img"
              draggable="false"
              ref={imageRef}
              onMouseDown={startDrag}
            />
            <div className="arrow prev" onClick={prevImage}>
              &#8249;
            </div>
            <div className="arrow next" onClick={nextImage}>
              &#8250;
            </div>
          </div>
        </div>
      )}

      <div className="car-details">
        <div className="car-info">
          <h3 className="car-subtitle">Podstawowe informacje</h3>
          <ul>
            <li><strong>Marka:</strong> Lexus</li>
            <li><strong>Model:</strong> ES300h</li>
            <li><strong>Rok produkcji:</strong> 2021</li>
            <li><strong>Rodzaj napędu:</strong> Hybrydowy (benzyna + elektryczny)</li>
            <li><strong>Silnik:</strong> 2.5L 4-cylindrowy + silnik elektryczny</li>
            <li><strong>Prędkość maksymalna:</strong> 180 km/h</li>
            <li><strong>Zużycie paliwa:</strong> 5.6 L/100 km</li>
          </ul>
        </div>
      </div>

      <ul className="car-comfort">
        <caption>Komfort</caption>
        <li>🛋️ Skórzana, miękka tapicerka klasy premium</li>
        <li>❄️ Czterostrefowa klimatyzacja automatyczna</li>
        <li>🔇 Niezwykle cicha kabina dzięki wygłuszeniu i napędowi hybrydowemu</li>
        <li>🚗 Płynna jazda dzięki zawieszeniu o wysokiej kulturze pracy</li>
        <li>🔊 System audio Mark Levinson – krystaliczny dźwięk</li>
        <li>🌡️ Podgrzewane i wentylowane fotele z przodu i z tyłu</li>
        <li>💺 Elektrycznie regulowane siedzenia z pamięcią ustawień</li>
        <li>☀️ Elektryczna roleta tylnej szyby i bocznych szyb</li>
        <li>📱 Bezprzewodowa ładowarka i złącza USB dla pasażerów</li>
        <li>🌌 Panoramiczny dach – wrażenie przestrzeni</li>
      </ul>
    </div>
  );
}

export default Car;
