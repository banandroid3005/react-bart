import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Kontakt – Taxi Lexus ES300h Kielce</title>
        <meta
          name="description"
          content="Skontaktuj się z nami, aby zamówić usługę taxi Lexus ES300h w Kielcach. Dostępność, informacje o rezerwacjach, oraz kontakt telefoniczny."
        />
      </Helmet>

      <section className="contact-header">
        <h1>Skontaktuj się z nami</h1>
        <p>Dostępni 24/7 – luksus, styl i punktualność w każdym kursie.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-box fade-in">
          <FaPhoneAlt className="icon" />
          <h3>Telefon</h3>
          <p><strong>PL:</strong> +48 660 866 047</p>
          <p><strong>UK:</strong> +44 7425 931918</p>
        </div>

        <div className="contact-box fade-in">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p><a href="mailto:szeregtaki@gmail.com">baju24@gmail.com</a></p>
        </div>

        <div className="contact-box fade-in">
          <FaMapMarkerAlt className="icon" />
          <h3>Lokalizacja</h3>
          <p>Kielce, kursy na całą Polskę</p>
        </div>
      </section>

      <section className="contact-map fade-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0085145880443!2d20.62856721579523!3d50.86607767953448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182723e5cdb4ab%3A0xb4e3749a5f5b2e9f!2sKielce!5e0!3m2!1spl!2spl!4v1680000000000!5m2!1spl!2spl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa - Kielce"
        ></iframe>
      </section>

      <section className="contact-btns fade-in">
        <a href="tel:+48660866047" className="contact-btn">📞 Zadzwoń Polska</a>
        <a href="tel:+447425931918" className="contact-btn">📞 Zadzwoń UK</a>
        <a href="mailto:szeregtaki@gmail.com" className="contact-btn">✉️ Napisz e-mail</a>
      </section>

      <footer className="contact-social fade-in">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTiktok /></a>
      </footer>
    </div>
  );
}

export default Contact;
