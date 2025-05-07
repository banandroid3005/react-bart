import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const img = new Image();
    // Upewnij się, że ścieżka do logo jest poprawna
    img.src = "/images/logo.webp"; 

    const setFooterLoaded = () => {
      if (footerRef.current && !footerRef.current.classList.contains("footer-loaded")) {
        footerRef.current.classList.add("footer-loaded");
      }
    };

    img.onload = setFooterLoaded;
    // Dodaj obsługę błędu ładowania obrazu, aby stopka nadal się pojawiała
    img.onerror = setFooterLoaded; 

    // Sprawdź, czy obraz jest już w pamięci podręcznej przeglądarki
    if (img.complete) {
      setFooterLoaded();
    }
    
    // Timeout bezpieczeństwa: jeśli obraz nie załaduje się w określonym czasie,
    // i tak dodaj klasę 'footer-loaded', aby treść stopki była widoczna (przez zmianę opacity)
    const safetyTimeout = setTimeout(setFooterLoaded, 2000); // np. 2 sekundy

    return () => {
      // Wyczyść timeout przy odmontowywaniu komponentu
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <div className="footer-container" ref={footerRef}>
      <section className="footer-top">
        <h3>
          Bart Premium Services
          <div className="footer-logo">
            <img 
              src="/images/logo.webp" 
              alt="Logo" 
              width="250" 
              height="80" 
              loading="eager"
              fetchpriority="high" 
            />
          </div>
        </h3>
        <p>Ekskluzywne przejazdy taxi na terenie całej Polski</p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>O nas</h3>
            <Link to="/Auto">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              O Aucie
            </Link>
            <Link to="/Usługi">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              Usługi
            </Link>
            <Link to="/Kontakt">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              Kontakt
            </Link>
            <Link to="/O-mnie">
              <span className="fa-icon">
                <FaChevronRight />
              </span>
              O mnie
            </Link>
          </div>
          <div className="footer-link-items">
            <h3>Social Media</h3>
            <a
              href="https://www.instagram.com/bartpremiumservices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaInstagram />
              </span>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/bartpremiumservices?locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaFacebookF />
              </span>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@twoj_profil_tiktok" // Popraw link do TikToka
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaTiktok />
              </span>
              Tiktok
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
            <a href="mailto:bartpremiumservices@gmail.com">
              <span className="fa-icon">
                <FaEnvelope />
              </span>
              bartpremiumservices@gmail.com
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