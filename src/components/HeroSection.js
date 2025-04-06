import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-heading">
        <h2>Ekskluzywna podróż tylko dla Ciebie</h2>
      </div>
      <div className="hero-sub-heading">
        Lexus ES 300h | Usługi premium taxi | Kielce i cała Polska
      </div>
      <div className="hero-btn">
        <a href="tel:+48664269408">Zarezerwuj przejazd</a>
      </div>
      <section className="hero-columns">
        <div className="hero-column">
          <h2>Dlaczego warto?</h2>
          <ul>
            <li>✅ Komfort klasy premium</li>
            <li>🛡️ Bezpieczeństwo i dyskrecja</li>
            <li>🧑‍✈️ Doświadczony kierowca</li>
            <li>📍 Cała Polska, 24/7</li>
          </ul>
        </div>
        <div className="hero-column">
          <h2>O aucie</h2>
          <p>
            Lexus ES300h 2021 – luksus, cisza i wygoda. Skórzana tapicerka,
            klimatyzacja czterostrefowa i hybrydowy napęd. Idealny do przejazdów
            biznesowych i długodystansowych.
          </p>
          <a href="/car">Zobacz więcej</a>
        </div>
        <div className="hero-column">
          <h2>Opinie klientów</h2>
          <blockquote>„Luksus i spokój, jakiego szukałem.”</blockquote>
          <blockquote>„Profesjonalna obsługa. Polecam!”</blockquote>
        </div>
      </section>
      <div className="container-call">
        <h3>Masz pytanie?</h3>
        <a href="/contact">Zadzwoń lub skontaktuj się ze mną drogą email</a>
      </div>
    </div>
  );
}

export default HeroSection;
