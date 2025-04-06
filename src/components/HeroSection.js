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
      </section>

      {/* Sekcja Co oferujemy */}
      <section className="hero-columns">
        <div className="hero-column-offer">
          <h2>Co oferujemy</h2>
          <p>
            Oferujemy komfortowy transport w luksusowym Lexusie ES300h 2021,
            idealnym zarówno na spotkania biznesowe, jak i prywatne wyjazdy.
            Dzięki ekologicznej technologii hybrydowej nasz pojazd gwarantuje
            cichą i wydajną jazdę, a najwyższej jakości fotele skórzane i
            nowoczesny system multimedialny zapewniają pełny komfort w podróży.
            Nasze usługi obejmują transport na lotniska, transfery między
            miastami oraz przewóz osób na specjalne okazje, takie jak wesela czy
            konferencje. Dodatkowo, oferujemy przewóz zwierząt, zapewniając im
            komfortowe warunki i bezpieczeństwo w trakcie podróży. Wszystkie
            nasze pojazdy są regularnie serwisowane, a doświadczeni kierowcy
            dbają o bezpieczeństwo pasażerów. Zapewniamy także usługi
            transportowe dla firm, oferując elastyczne warunki dostosowane do
            potrzeb przedsiębiorstw i preferencyjne ceny dla stałych klientów.
            Nasz transport dostępny jest 24/7, a nasza firma to gwarancja
            punktualności i niezawodności.
          </p>
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
