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
} from "react-icons/fa";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(footerRef.current);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footerRef.current);

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
            <Link to="/about-me">O mnie</Link>
          </div>
          <div className="footer-link-items">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="/">
                <div className="fa-icon">
                  <FaInstagram />{" "}
                </div>
                Instagram
              </a>
            </div>
            <div className="social-icons">
              <a href="/">
                <div className="fa-icon">
                  <FaFacebookF />{" "}
                </div>
                Facebook
              </a>
            </div>
            <div className="social-icons">
              <a href="/">
                <div className="fa-icon">
                  <FaTiktok />{" "}
                </div>
                Tiktok
              </a>
            </div>
          </div>
          <div className="footer-link-items">
            <h3>Kontakt</h3>
            <p>
              <span className="fa-icon">
                <FaPhoneAlt />{" "}
              </span>
              +48 660 866 047
            </p>

            <p>
              <span className="fa-icon">
                <FaPhoneAlt />{" "}
              </span>
              +44 7425 931918
            </p>

            <p>
              <span className="fa-icon">
                <FaEnvelope />{" "}
              </span>
              baju.24@gmail.com
            </p>

            <p>
              <span className="fa-icon">
                <FaWhatsapp />{" "}
              </span>
              Whatsapp
            </p>
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
