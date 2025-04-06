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
        <div className="contact-phone">Numer telefonu: +48 ### ### ###</div>
        <div className="contact-email">Email: ######@gmail.com</div>
        <div className="contact-location">
          Lokalizacja: Kielce, kursy na całą Polskę
        </div>
        <div className="contact-btns">
          <a href="tel:+48664269408">
            <i className="fa fa-phone" /> Zadzwoń teraz
          </a>
          <a href="mailto:szeregtaki@gmail.com">
            <i className="fa fa-envelope" /> Skontaktuj się ze mną
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
