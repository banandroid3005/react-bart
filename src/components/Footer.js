import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null); // Używamy ref do elementu stopki
  const [isVisible, setIsVisible] = useState(false); // Stan, aby kontrolować widoczność

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Jeśli stopka jest widoczna, zmień stan
            observer.unobserve(footerRef.current); // Przestań obserwować
          }
        });
      },
      {
        threshold: 0.4, // Element musi być widoczny w 10% okna
      }
    );

    observer.observe(footerRef.current); // Rozpocznij obserwowanie stopki

    // Zwróć funkcję czyszczącą
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`footer-container ${isVisible ? "visible" : ""}`}
      ref={footerRef}
    >
      <section className="footer-top">
        <h3>Bart Premium Services</h3>
        <p>Ekskluzywne przejazdy taxi na terenie całej Polski</p>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>O nas</h3>
            <Link to="/car">O Aucie</Link>
            <Link to="/pricing">Cennik</Link>
            <Link to="/contact">Kontakt</Link>
          </div>
          <div className="footer-link-items">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="/">
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </div>
            <div className="social-icons">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
                Facebook
              </a>
            </div>
            <div className="social-icons">
              <a href="/">
                <i className="fab fa-tiktok" />
                Tiktok
              </a>
            </div>
          </div>
          <div className="footer-link-items">
            <h3>Kontakt</h3>
            <p>📞 +48 664 269 408</p>
            <p>✉️ szeregtaxi@gmail.com</p>
            <p>Kielce, cała Polska</p>
          </div>
        </div>
      </div>

      <section className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bart Premium Services. Wszelkie prawa
          zastrzeżone.
        </p>
      </section>
    </div>
  );
}

export default Footer;
