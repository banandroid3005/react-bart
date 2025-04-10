import React from "react";
import "../../App.css";
import "./Home.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home – Taxi Lexus ES300h Kielce</title>
        <meta
          name="description"
          content="Skontaktuj się z nami, aby zamówić usługę taxi Lexus ES300h w Kielcach. Dostępność, informacje o rezerwacjach, oraz kontakt telefoniczny."
        />
      </Helmet>
      <div className="home-heading">
        <h2>Ekskluzywna podróż tylko dla Ciebie</h2>
      </div>
      <div className="home-sub-heading">
        Lexus ES 300h | Usługi premium taxi | Kielce i cała Polska
      </div>
      <div className="home-btn">
        <a href="tel:+48666478312">Zarezerwuj przejazd</a>
      </div>
      <section className="home-columns">
        <div className="home-column">
          <h2>Dlaczego warto?</h2>
          <ul>
            <li>✅ Komfort klasy premium</li>
            <li>🛡️ Bezpieczeństwo i dyskrecja</li>
            <li>🧑‍✈️ Doświadczony kierowca</li>
            <li>📍 Cała Polska, 24/7</li>
          </ul>
        </div>
        <div className="home-column">
          <h2>O aucie</h2>
          <p>
            Lexus ES300h 2021 – luksus, cisza i wygoda. Skórzana tapicerka,
            klimatyzacja czterostrefowa i hybrydowy napęd. Idealny do przejazdów
            biznesowych i długodystansowych.
          </p>
          <a href="/car">Zobacz więcej</a>
        </div>
      </section>
      <section className="home-columns">
        <div className="home-column-offer">
          <h2>Co oferujemy</h2>
          <p>
            Oferuję komfortowy transport luksusowym Lexusem ES300h 2021,
            idealnym zarówno na spotkania biznesowe, jak i prywatne wyjazdy.
            Jako doświadczony kierowca dbam o każdy detal podróży – od
            punktualności po atmosferę sprzyjającą relaksowi lub pracy. Dzięki
            cichej i oszczędnej technologii hybrydowej jazda jest wyjątkowo
            płynna, a wnętrze pojazdu – z najwyższej klasy skórzanymi fotelami i
            systemem multimedialnym – gwarantuje wygodę na najwyższym poziomie.
            Obsługuję transfery lotniskowe, przejazdy między miastami oraz
            przewóz osób na wyjątkowe wydarzenia, takie jak śluby, konferencje
            czy kolacje biznesowe. Działam jako prywatny kierowca premium,
            zapewniając indywidualne podejście, dyskrecję i pełne zaangażowanie.
            Samochód jest regularnie serwisowany, a każda podróż realizowana
            jest z dbałością o najwyższe standardy. Transport dostępny jest
            24/7, wyłącznie na rezerwację – to usługa dla tych, którzy cenią
            niezawodność i jakość.
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

export default Home;
