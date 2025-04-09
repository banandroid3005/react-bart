import React from "react";
import { Helmet } from "react-helmet";
import '../../App.css';
import "./Contact.css";

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

      <div className="contact-header">
        <h1>Skontaktuj się z nami</h1>
        <p>Jesteśmy dostępni 24/7, aby zapewnić Ci najwyższą jakość usług.</p>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <p>
            <strong>Numery telefonu:</strong>
            <br />
            <img src={require="../../images/poland.webp"} /> Polska: 660 866 047
            <br />
            <img src={require="../../images/uk.webp"} />UK: 7425 931918
          </p>
        </div>

        <div className="info-item">
          <i className="fa fa-email" />
          <p>
            <strong>Email:</strong> <a href="mailto:szeregtaki@gmail.com">baju24@gmail.com</a>
          </p>
        </div>

        <div className="info-item">
          <p>
            <strong>Lokalizacja:</strong> Kielce, kursy na całą Polskę
          </p>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0085145880443!2d20.62856721579523!3d50.86607767953448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182723e5cdb4ab%3A0xb4e3749a5f5b2e9f!2sKielce!5e0!3m2!1spl!2spl!4v1680000000000!5m2!1spl!2spl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa - Kielce"
        ></iframe>
      </div>

      <div className="contact-btns">
        <a href="tel:+48660866047" className="contact-btn">
          Zadzwoń Polska
        </a>
        <a href="tel:+447425931918" className="contact-btn">
          Zadzwoń UK
        </a>
        <a href="mailto:szeregtaki@gmail.com" className="contact-btn">
          Napisz e-mail
        </a>
      </div>
      <div className="contact-social">
        <div className="contact-social-icon">
          <a href="#"><i className="fa fa-facebook" /></a>
          <a href="#"><i className="fa fa-instagram" /></a>
          <a href="#"><i className="fa fab-tiktok" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
