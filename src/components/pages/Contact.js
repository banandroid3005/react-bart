import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <Helmet>
          <title>Kontakt – Taxi Lexus ES300h Kielce</title>
          <meta
            name="description"
            content="Skontaktuj się z nami, aby zamówić usługę taxi Lexus ES300h w Kielcach. Dostępność, informacje o rezerwacjach, oraz kontakt telefoniczny."
          />
        </Helmet>
        <h3>Kontakt</h3>

        <div className="contact-phone">
          <p>
            <strong>Numery telefonu:</strong>
          </p>
          <div className="phone-list">
            <span>
              {" "}
              <img
                src={require("../../images/poland.webp")}
                alt="moje zdjecie"
                loading="lazy"
              />
              Polska: 660 866 047
            </span>
            <br />
            <span>
              <img
                src={require("../../images/united-kingdom.webp")}
                alt="moje zdjecie"
                loading="lazy"
              />
              UK: 7425 931918
            </span>
          </div>
        </div>

        <div className="contact-email">
          <strong>Email:</strong>{" "}
          <a href="mailto:szeregtaki@gmail.com">baju24@gmail.com</a>
        </div>

        <div className="contact-location">
          <strong>Lokalizacja:</strong> Kielce, kursy na całą Polskę
        </div>

        <div className="contact-hours">
          <strong>Godziny pracy:</strong> Codziennie 6:00 – 23:00
        </div>

        {/* Mapa */}
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

        {/* Przyciski kontaktowe */}
        <div className="contact-btns">
          <a href="tel:+48660866047">
            <i className="fa fa-phone" /> Zadzwoń Polska
          </a>
          <a href="tel:+447425931918">
            <i className="fa fa-phone" /> Zadzwoń UK
          </a>
          <a href="mailto:szeregtaki@gmail.com">
            <i className="fa fa-envelope" /> Napisz e-mail
          </a>
        </div>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok" />
          </a>
          <a
            href="https://www.WhatsApp.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
