import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-section">
      {/* Tytuł sekcji */}
      <h2 className="services-title">Nasze Usługi</h2>

      {/* Karty usług */}
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🚗</div>
          <h3>Przewóz VIP</h3>
          <p>Komfortowy i elegancki transport na najwyższym poziomie.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏙️</div>
          <h3>Transfery Lotniskowe</h3>
          <p>Bezpieczne i wygodne transfery do i z lotnisk.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📞</div>
          <h3>Usługi na Życzenie</h3>
          <p>Jakość usług dopasowana do Twoich indywidualnych potrzeb.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💼</div>
          <h3>Biznesowy Transport</h3>
          <p>Idealny wybór dla profesjonalistów wymagających najwyższego komfortu.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🌍</div>
          <h3>Turystyczne Przewozy</h3>
          <p>Komfortowe przejazdy po atrakcyjnych turystycznie miejscach.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🏁</div>
          <h3>Transfery na Wydarzenia</h3>
          <p>Specjalistyczny transport na imprezy sportowe, koncerty i inne wydarzenia.</p>
        </div>
      </div>

      {/* Spersonalizowane Usługi */}
      <div className="custom-services">
        <h3>Spersonalizowane Usługi</h3>
        <p>Skontaktuj się z nami, aby omówić Twoje indywidualne potrzeby transportowe.</p>
      </div>

      {/* Call to Action */}
      <div className="services-contact-cta">
        <p>Chcesz zarezerwować przejazd? Skontaktuj się z nami, aby ustalić szczegóły.</p>
        <a href="tel:+123456789" className="btn-contact">Zadzwoń</a>
        <a href="mailto:info@taxi.com" className="btn-contact secondary">Napisz E-mail</a>
      </div>

      {/* Opinie klientów */}
      <div className="testimonials">
        <div className="testimonial">
          <p>"Niezawodny transport, zawsze na czas. Zdecydowanie polecam!"</p>
          <p className="author">Jan Kowalski, Prezes</p>
        </div>
        <div className="testimonial">
          <p>"Usługa na najwyższym poziomie. Komfort podróży był niesamowity!"</p>
          <p className="author">Anna Nowak, Manager</p>
        </div>
      </div>

      <div className="decorative-line"></div>
    </div>
  );
}

export default Services;
