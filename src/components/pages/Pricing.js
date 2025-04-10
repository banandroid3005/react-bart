import React from "react";
import "./Pricing.css";
import { Helmet } from "react-helmet";

function Pricing() {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Cennik Taxi – Lexus ES300h Kielce</title>
        <meta
          name="description"
          content="Sprawdź aktualny cennik usług taxi Lexus ES300h w Kielcach – taryfy dzienne, nocne, poza miastem."
        />
      </Helmet>

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

      {/* Dodatkowa sekcja z informacjami */}
      <div className="additional-info">
        <h3>Dlaczego warto wybrać nasze usługi?</h3>
        <p>
          Lexus ES300h to luksusowy pojazd klasy premium, zapewniający wygodną i
          komfortową podróż w każdych warunkach. Oferujemy profesjonalną obsługę,
          bezpieczeństwo i elegancję na każdym etapie podróży. Skorzystaj z naszych
          usług i poczuj różnicę!
        </p>
        <a href="#rezerwacja" className="cta-link">
          Zarezerwuj teraz
        </a>
      </div>
    </div>
  );
}

export default Pricing;
