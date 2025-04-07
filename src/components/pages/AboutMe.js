import React from "react";
import "./AboutMe.css";
import { Helmet } from "react-helmet";

function AboutMe() {
  return (
    <>
      <div className="about-me-container">
        <Helmet>
          <title>O mnie – Taxi Premium Lexus ES300h Kielce</title>
          <meta
            name="description"
            content="Poznaj właściciela i kierowcę usługi premium taxi Lexus ES300h w Kielcach. Dowiedz się, dlaczego warto skorzystać z naszej oferty."
          />
        </Helmet>
        <div className="about-me-photo">
          <img
            src={require("../../images/face.webp")}
            alt="Moje zdjecie"
            loading="lazy"
          />
        </div>
        <div className="about-me-text">
          <p>
            Mam duże doświadczenie jako kierowca, specjalizując się w usługach
            premium. Przez wiele lat miałem okazję pracować z klientami z różnych
            branż, a także z celebrytami. Moje doświadczenie obejmuje przewóz
            gwiazd filmowych, sportowców, w tym także kierowców Formuły 1 w
            Londynie, gdzie miałem przyjemność świadczyć usługi dla najbardziej
            wymagających pasażerów.
          </p>
          <p>
            Moja praca jest moją pasją, dlatego zawsze dbam o najwyższy poziom
            komfortu i bezpieczeństwa podczas każdego kursu. Zawdzięczam to
            nie tylko moim umiejętnościom, ale także samochodowi, którym
            podróżują pasażerowie – Lexus ES300h, który zapewnia niezwykły
            komfort i wygodę na każdej trasie.
          </p>
          <p>
            Moje usługi są dedykowane wszystkim, którzy cenią sobie luksus, spokój
            i bezpieczeństwo podczas podróży. Zawsze staram się dostosować do
            potrzeb moich pasażerów, oferując usługi transportowe najwyższej
            jakości.
          </p>
        </div>
      </div>

      {/* Sekcja usług */}
      <div className="services-container">
        <h3>Nasze Usługi</h3>
        <div className="service">
          <h4>Transport VIP</h4>
          <p>Oferujemy przewóz osób VIP, w tym celebrytów, sportowców i osób wymagających najwyższej jakości usług.</p>
        </div>
        <div className="service">
          <h4>Przewóz na lotnisko</h4>
          <p>Zapewniamy komfortowy transport na lotniska w Polsce i za granicą, z pełnym profesjonalizmem i punktualnością.</p>
        </div>
        <div className="service">
          <h4>Transfery na eventy</h4>
          <p>Oferujemy usługi transportowe na wszelkiego rodzaju eventy, konferencje, wesela, koncerty i inne ważne wydarzenia.</p>
        </div>
      </div>
      
      {/* Sekcja FAQ */}
      <div className="faq-container">
        <h3>Najczęściej zadawane pytania</h3>
        <div className="faq-item">
          <h4>Jakie usługi oferujesz?</h4>
          <p>Oferujemy transport VIP, przewóz na lotniska, transfery na eventy oraz indywidualne usługi transportowe.</p>
        </div>
        <div className="faq-item">
          <h4>Czy mogę zamówić taxi na długi dystans?</h4>
          <p>Oczywiście, oferujemy również transport na długie dystanse, w tym transfery na lotniska w Polsce i Europie.</p>
        </div>
        <div className="faq-item">
          <h4>Jak mogę zarezerwować kurs?</h4>
          <p>Rezerwacji można dokonać telefonicznie lub poprzez nasz formularz kontaktowy na stronie.</p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
