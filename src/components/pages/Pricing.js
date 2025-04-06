// src/components/Pricing.js
import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <h2>Cennik usług taxi (Lexus ES300h 2021 - Premium)</h2>

      <div className="pricing-item">
        <h3>Opłata początkowa</h3>
        <p>15,00 zł</p>
      </div>

      <div className="pricing-item">
        <h3>Taryfa 1 (dni robocze, godziny 6:00–22:00)</h3>
        <p>5,00 zł/km</p>
      </div>

      <div className="pricing-item">
        <h3>
          Taryfa 2 (noc, godziny 22:00–6:00 oraz całodobowo w niedziele i
          święta)
        </h3>
        <p>6,50 zł/km</p>
      </div>

      <div className="pricing-item">
        <h3>Taryfa 3 (poza miastem, godziny 6:00–22:00)</h3>
        <p>7,00 zł/km</p>
      </div>

      <div className="pricing-item">
        <h3>
          Taryfa 4 (poza miastem, godziny 22:00–6:00 oraz całodobowo w niedziele
          i święta)
        </h3>
        <p>8,00 zł/km</p>
      </div>

      <div className="pricing-item">
        <h3>Godzina postoju</h3>
        <p>80,00 zł</p>
      </div>

      <div className="pricing-item">
        <h3>Przewóz zwierząt</h3>
        <p>10,00 zł dodatkowo</p>
      </div>

      <div className="pricing-item">
        <h3>Opłata za luksusowy pojazd (Lexus ES300h 2021)</h3>
        <p>30,00 zł dodatkowo</p>
      </div>
    </div>
  );
}

export default Pricing;
