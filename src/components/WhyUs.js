import React from "react";
import "./WhyUs.css";
import { FaCar, FaClock, FaShieldAlt, FaGlobe, FaUserTie, FaStar } from "react-icons/fa";

function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <h2 className="whyus-title">Dlaczego właśnie my?</h2>
        <div className="whyus-grid">
          <div className="whyus-card">
            <FaCar className="whyus-icon" />
            <h3>Komfort</h3>
            <p>Podróżuj w luksusowych warunkach w Lexusie ES300h.</p>
          </div>
          <div className="whyus-card">
            <FaClock className="whyus-icon" />
            <h3>Punktualność</h3>
            <p>Zawsze na czas, niezależnie od warunków.</p>
          </div>
          <div className="whyus-card">
            <FaShieldAlt className="whyus-icon" />
            <h3>Bezpieczeństwo</h3>
            <p>Profesjonalizm i spokój w każdej podróży.</p>
          </div>
          <div className="whyus-card">
            <FaGlobe className="whyus-icon" />
            <h3>Znajomość języków</h3>
            <p>Komunikacja po angielsku i nie tylko.</p>
          </div>
          <div className="whyus-card">
            <FaUserTie className="whyus-icon" />
            <h3>Duże doświadczenie</h3>
            <p>Wieloletnia praktyka z wymagającymi klientami.</p>
          </div>
          <div className="whyus-card">
            <FaStar className="whyus-icon" />
            <h3>Auto klasy premium</h3>
            <p>Nowoczesny, hybrydowy Lexus z pełnym wyposażeniem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
