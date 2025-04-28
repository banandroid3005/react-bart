import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-heading">
        <h2>Ekskluzywna podróż tylko dla Ciebie</h2>
      </div>
      <div className="hero-sub-heading">
        Lexus ES 300h | Usługi premium taxi | Kielce i cała Polska
      </div>
      <div className="hero-logo">
      <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="hero-btn">
        <a href="tel:+48660866047">Zarezerwuj przejazd</a>
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
          <a href="/Auto">Zobacz więcej</a>
        </div>
      </section>
      <section className="hero-columns">
        <div className="hero-column-offer">
          <h2>Co oferujemy</h2>
          <p>
            Oferuję komfortowy transport luksusowym Lexusem ES300h, idealnym
            zarówno na spotkania biznesowe, jak i prywatne wyjazdy. Jako
            doświadczony kierowca dbam o każdy detal podróży – od punktualności
            po atmosferę sprzyjającą relaksowi lub pracy. Dzięki cichej i
            oszczędnej technologii hybrydowej jazda jest wyjątkowo płynna, a
            wnętrze pojazdu – z najwyższej klasy skórzanymi fotelami i systemem
            multimedialnym – gwarantuje wygodę na najwyższym poziomie. Obsługuję
            transfery lotniskowe, przejazdy między miastami oraz przewóz osób na
            wyjątkowe wydarzenia, takie jak śluby, konferencje czy kolacje
            biznesowe. Działam jako prywatny kierowca, zapewniając indywidualne
            podejście, dyskrecję i pełne zaangażowanie. Samochód jest regularnie
            serwisowany, a każda podróż realizowana jest z dbałością o najwyższe
            standardy. Transport dostępny jest 24/7, wyłącznie na rezerwację –
            to usługa dla tych, którzy cenią niezawodność i jakość.
          </p>
        </div>
      </section>

      <div className="container-call">
        <h3>Masz pytanie?</h3>
        <a href="/Kontakt">Zadzwoń lub skontaktuj się ze mną drogą email</a>
      </div>
    </div>
  );
}

export default HeroSection;
