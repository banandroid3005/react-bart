import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Usuwamy obserwację po pierwszym pojawieniu się, aby animacja nie powtarzała się
            if (footerRef.current) {
              observer.unobserve(footerRef.current);
            }
          }
        });
      },
      {
        threshold: 0.1, // Uruchom, gdy 10% elementu jest widoczne
      }
    );

    // Sprawdzamy, czy footerRef.current istnieje przed rozpoczęciem obserwacji
    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Funkcja czyszcząca - usuwa obserwację, gdy komponent jest odmontowywany
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Pusta tablica zależności - useEffect uruchomi się tylko raz po zamontowaniu

  return (
    <div
      className={`footer-container ${isVisible ? "visible" : ""}`}
      ref={footerRef}
    >
      <section className="footer-top">
        <h3>
          Bart Premium Services{" "}
          <div className="footer-logo">
            <img src={require("./../images/minji.png")} alt="Logo" />
          </div>
        </h3>
        <p>Ekskluzywne przejazdy taxi na terenie całej Polski</p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>O nas</h3>
            <Link to="/car">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              O Aucie
            </Link>
            <Link to="/pricing">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              Cennik
            </Link>
            <Link to="/contact">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              Kontakt
            </Link>
            <Link to="/about-me">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              O mnie
            </Link>
          </div>
          <div className="footer-link-items">
            <h3>Social Media</h3>
            {/* UWAGA: Linki social media nadal prowadzą do '/', zaktualizuj je */}
            <Link to="/">
              <span className="fa-icon">
                <FaInstagram />
              </span>
              Instagram
            </Link>
            <Link to="/">
              <span className="fa-icon">
                <FaFacebookF />
              </span>
              Facebook
            </Link>
            <Link to="/">
              <span className="fa-icon">
                <FaTiktok />
              </span>
              Tiktok
            </Link>
            <Link to="/">
              <span className="fa-icon">
                <FaWhatsapp />
              </span>
              Whatsapp
            </Link>
          </div>
          <div className="footer-link-items">
            <h3>Kontakt</h3>
            <a href="tel:+48660866047">
              <span className="fa-icon">
                <FaPhoneAlt />
              </span>
              +48 660 866 047
            </a>
            <a href="tel:+447425931918">
              <span className="fa-icon">
                <FaPhoneAlt />
              </span>
              +44 7425 931918
            </a>
            <a href="mailto:BartPremiumServices-contact@gmail.com">
              <span className="fa-icon">
                <FaEnvelope />
              </span>
              BartPremiumServices-contact@gmail.com
            </a>
            <a
              href="https://wa.me/48660866047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaWhatsapp />
              </span>
              Whatsapp
            </a>
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
