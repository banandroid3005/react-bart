import React from "react";
import "./Car.css";
import lexusImage from "../../images/lexus.webp";
import { Helmet } from "react-helmet";

function Car() {
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

      <div className="car-details">
        <div className="car-image">
          <img
            src={lexusImage}
            alt="Lexus ES300h 2021"
            className="car-img"
            loading="lazy"
          />
        </div>

        <div className="car-info">
          <h3 className="car-subtitle">Podstawowe informacje</h3>
          <ul>
            <li>
              <strong>Marka:</strong> Lexus
            </li>
            <li>
              <strong>Model:</strong> ES300h
            </li>
            <li>
              <strong>Rok produkcji:</strong> 2021
            </li>
            <li>
              <strong>Rodzaj napędu:</strong> Hybrydowy (benzyna + elektryczny)
            </li>
            <li>
              <strong>Silnik:</strong> 2.5L 4-cylindrowy + silnik elektryczny
            </li>
            <li>
              <strong>Prędkość maksymalna:</strong> 180 km/h
            </li>
            <li>
              <strong>Zużycie paliwa:</strong> 5.6 L/100 km
            </li>
            <li>
              <strong>Komfort:</strong> Skórzana tapicerka, system audio
              premium, podgrzewane fotele
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Car;
