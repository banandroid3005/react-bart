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
  FaWhatsapp,
  FaClock,
  FaUserTie,
  FaQuestion,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-background">
      <Helmet>
        <title>Kontakt - Premium Transport | Kielce i cała Polska</title>
        <meta
          name="description"
          content="Skontaktuj się z naszym zespołem dla luksusowego transportu 24/7. Dostępni w Kielcach i na terenie całej Polski."
        />
      </Helmet>

      <div className="contact-container">
        <div className="contact-heading">
          <h2>Skontaktuj się z nami</h2>
          <p>
            Dostępni 24/7 – luksus, styl i punktualność w każdym kursie. Nasz
            zespół jest zawsze gotowy, aby zapewnić Ci niezapomniane
            doświadczenie transportowe na najwyższym poziomie.
          </p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <h3>Telefon</h3>
            <p>
              <strong>PL:</strong> +48 660 866 047
            </p>
            <p>
              <strong>UK:</strong> +44 7425 931918
            </p>
            <div className="contact-details-extra">
              <div className="contact-availability">
                <span className="availability-indicator"></span> Dostępny
                całodobowo
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>baju24@gmail.com</p>
            <div className="contact-details-extra">
              <p>Odpowiadamy w ciągu 1-2 godzin</p>
              <div className="contact-availability">
                <span className="availability-indicator"></span> Monitorowany
                24/7
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Lokalizacja</h3>
            <p>Kielce, kursy na całą Polskę</p>
            <div className="contact-details-extra">
              <p>Obsługujemy transfery międzynarodowe</p>
              <p>Wyjazdy z każdego miasta w Polsce</p>
            </div>
          </div>
        </div>

        <div className="contact-buttons-container">
          <div className="contact-prompt">
            <h3>Jak możemy Ci pomóc?</h3>
            <p>
              Wybierz preferowaną metodę kontaktu. Jesteśmy dostępni 24/7, aby
              zapewnić Ci najwyższej jakości transport w każdym momencie.
            </p>
          </div>
          <div className="contact-buttons">
            <a href="tel:+48660866047" className="btn-contact">
              <FaPhoneAlt /> Zadzwoń Polska
            </a>
            <a href="tel:+447425931918" className="btn-contact">
              <FaPhoneAlt /> Zadzwoń UK
            </a>
            <a href="mailto:baju24@gmail.com" className="btn-contact">
              <FaEnvelope /> Napisz e-mail
            </a>
            <a
              href="https://wa.me/48660866047"
              className="btn-contact whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <div className="social-media">
          <h3>Znajdź nas w mediach społecznościowych</h3>
          <p>
            Śledź nasze profile, aby być na bieżąco z naszymi usługami,
            promocjami oraz zobaczyć zdjęcia z naszej floty luksusowych
            pojazdów.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon tiktok">
              <FaTiktok />
            </a>
            <a href="#" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="faq-section">
          <div className="faq-heading">
            <h3>Często zadawane pytania</h3>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <FaQuestion /> Jaki jest czas oczekiwania na transport?
              </div>
              <div className="faq-answer">
                Standardowy czas oczekiwania to 15-30 minut, jednak zawsze
                rekomendujemy wcześniejszą rezerwację dla zapewnienia
                dostępności pojazdu i kierowcy.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <FaQuestion /> Czy możliwe są przejazdy zagraniczne?
              </div>
              <div className="faq-answer">
                Tak, oferujemy przejazdy międzynarodowe do większości krajów
                europejskich. Prosimy o kontakt z wyprzedzeniem w celu ustalenia
                szczegółów.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <FaQuestion /> Jakie metody płatności akceptujecie?
              </div>
              <div className="faq-answer">
                Akceptujemy płatności gotówką, kartą kredytową/debetową,
                przelewem bankowym oraz przez popularne aplikacje płatnicze.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <FaQuestion /> Czy mogę zarezerwować transport na kilka dni?
              </div>
              <div className="faq-answer">
                Oczywiście, oferujemy również usługi transportowe na dłuższe
                okresy. W takich przypadkach przygotowujemy specjalną ofertę z
                atrakcyjnymi stawkami.
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact-buttons-container"
          style={{ marginTop: "5rem" }}
        >
          <div className="contact-prompt">
            <h3>Gotowy na luksusową podróż?</h3>
            <p>
              Skontaktuj się z nami już teraz i zarezerwuj swój komfortowy
              przejazd. Nasi profesjonalni kierowcy zadbają o Twoje
              bezpieczeństwo i wygodę.
            </p>
          </div>
          <div className="contact-buttons">
            <a href="tel:+48660866047" className="btn-contact">
              <FaUserTie /> Zarezerwuj przejazd
            </a>
            <a href="#" className="btn-contact">
              <FaClock /> Sprawdź dostępność
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
