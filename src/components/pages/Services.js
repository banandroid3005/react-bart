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
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="services-background">
    <div className="services-container">
      <div className="services-heading">
        <h2>Nasze Usługi</h2>
        <p>Oferujemy szeroki zakres usług dostosowanych do Twoich potrzeb.</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <h3>Przewóz VIP</h3>
          <p>Komfortowy i elegancki transport na najwyższym poziomie.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faCity} />
          </div>
          <h3>Transfery Lotniskowe</h3>
          <p>Bezpieczne i wygodne transfery do i z lotnisk.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <h3>Usługi na Życzenie</h3>
          <p>Jakość usług dopasowana do Twoich indywidualnych potrzeb.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <h3>Biznesowy Transport</h3>
          <p>Idealny wybór dla profesjonalistów wymagających najwyższego komfortu.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <h3>Turystyczne Przewozy</h3>
          <p>Komfortowe przejazdy po atrakcyjnych turystycznie miejscach.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faFlagCheckered} />
          </div>
          <h3>Transfery na Wydarzenia</h3>
          <p>Specjalistyczny transport na imprezy sportowe, koncerty i inne wydarzenia.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faTaxi} />
          </div>
          <h3>Przewozy Lokalne</h3>
          <p>Szybkie i wygodne przejazdy w obrębie miasta.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3>Transport Bezpieczeństwa</h3>
          <p>Usługi transportowe z najwyższym poziomem bezpieczeństwa.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3>Transport Bezpieczeństwa</h3>
          <p>Usługi transportowe z najwyższym poziomem bezpieczeństwa.</p>
        </div>
      </div>

      <div className="services-contact">
        <h3>Skontaktuj się z nami</h3>
        <p>Masz pytania? Skontaktuj się z nami, aby omówić szczegóły.</p>
        <div className="contact-buttons">
          <a href="tel:+123456789" className="btn-contact">Zadzwoń</a>
          <a href="mailto:info@example.com" className="btn-contact secondary">Napisz E-mail</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;