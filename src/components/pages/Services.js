import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCity,
  faPhoneAlt,
  faBriefcase,
  faGlobe,
  faFlagCheckered,
  faTaxi,
  faShieldAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="services-background">
      <div className="services-container">
        <div className="services-heading">
          <h2>Nasze Usługi</h2>
          <p>
            Oferujemy szeroki zakres usług dostosowanych do Twoich potrzeb
            transportowych. Każda usługa jest realizowana z najwyższą
            starannością i profesjonalizmem.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faCar} />
            </div>
            <h3>Przewóz VIP</h3>
            <p>
              Komfortowy i elegancki transport na najwyższym poziomie dla
              wymagających klientów.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faCity} />
            </div>
            <h3>Transfery Lotniskowe</h3>
            <p>
              Bezpieczne i wygodne transfery do i z lotnisk z profesjonalnym
              kierowcą.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <h3>Usługi na Życzenie</h3>
            <p>
              Jakość usług dopasowana do Twoich indywidualnych potrzeb i
              preferencji.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <h3>Biznesowy Transport</h3>
            <p>
              Idealny wybór dla profesjonalistów wymagających najwyższego
              komfortu podróży.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3>Turystyczne Przewozy</h3>
            <p>
              Komfortowe przejazdy po atrakcyjnych turystycznie miejscach z
              doświadczonym przewodnikiem.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faFlagCheckered} />
            </div>
            <h3>Transfery na Wydarzenia</h3>
            <p>
              Specjalistyczny transport na imprezy sportowe, koncerty i inne
              wydarzenia specjalne.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faTaxi} />
            </div>
            <h3>Przewozy Lokalne</h3>
            <p>
              Szybkie i wygodne przejazdy w obrębie miasta o każdej porze dnia i
              nocy.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Transport Bezpieczeństwa</h3>
            <p>
              Usługi transportowe z najwyższym poziomem bezpieczeństwa dla
              Ciebie i Twoich bliskich.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Transport Bezpieczeństwa</h3>
            <p>
              Usługi transportowe z najwyższym poziomem bezpieczeństwa dla
              Ciebie i Twoich bliskich.
            </p>
          </div>
        </div>

        <div className="services-contact-buttons-container">
          <div className="services-contact-prompt">
            <h3>Skontaktuj się z nami</h3>
            <p>
              Masz pytania dotyczące naszych usług? Skontaktuj się z nami, aby
              omówić szczegóły lub otrzymać indywidualną ofertę dopasowaną do
              Twoich potrzeb.
            </p>
          </div>
          <div className="services-contact-buttons">
            <a href="tel:+123456789" className="services-btn-contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> Zadzwoń Teraz
            </a>
            <a
              href="mailto:info@example.com"
              className="services-btn-contact whatsapp"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Wyślij E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
