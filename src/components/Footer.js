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
            if (footerRef.current) {
              observer.unobserve(footerRef.current);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`footer-container ${isVisible ? "visible" : ""}`}
      ref={footerRef}
    >
      <section className="footer-top">
        <h3>
          Bart Premium Services{" "}
          <div className="footer-logo">
            <img src={require("./../images/logo.png")} alt="Logo" />
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
              href="https://wa.me/48660866047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaInstagram />
              </span>
              Instagram
            </a>
            <a
              href="https://wa.me/48660866047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-icon">
                <FaFacebookF />
              </span>
              Facebook
            </a>
            <a
              href="https://wa.me/48660866047"
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
