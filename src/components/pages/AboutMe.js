import React, { useEffect, useRef, useCallback, memo } from "react";
import "./AboutMe.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faPlaneDeparture,
  faCalendarCheck,
  faClock,
  faCar,
  faShieldAlt,
  faMusic,
  faLanguage,
  faTools,
  faGem,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

const Service = memo(({ icon, title, description, index }) => {
  const serviceRef = useRef(null);

  useEffect(() => {
    serviceRef.current?.classList.add(`delay-${(index % 3) + 1}`);
  }, [index]);

  return (
    <div className="aboutMe-service" ref={serviceRef} data-aos="fade-up">
      <div className="aboutMe-service-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="aboutMe-service-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
});

// Memoized StandardItem component
const StandardItem = memo(({ icon, title, description }) => (
  <div className="standard-item" data-aos="fade-up">
    <FontAwesomeIcon icon={icon} className="standard-icon" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
));

function AboutMe() {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    });

    const elementsToObserve = document.querySelectorAll('[data-aos="fade-up"]');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: faCrown,
      title: "Transport VIP",
      description:
        "Oferujemy przewóz osób VIP, w tym celebrytów, sportowców i osób wymagających najwyższej jakości usług.",
    },
    {
      icon: faPlaneDeparture,
      title: "Przewóz na lotnisko",
      description:
        "Zapewniamy komfortowy transport na lotniska w Polsce i za granicą, z pełnym profesjonalizmem i punktualnością.",
    },
    {
      icon: faCalendarCheck,
      title: "Transfery na eventy",
      description:
        "Oferujemy usługi transportowe na wszelkiego rodzaju eventy, konferencje, wesela, koncerty i inne ważne wydarzenia.",
    },
  ];

  const standards = [
    {
      icon: faClock,
      title: "Punktualność",
      description: "Na miejscu zawsze kilka minut przed czasem. Zawsze.",
    },
    {
      icon: faCar,
      title: "Perfekcyjna Czystość",
      description: "Auto czyszczone po każdym kursie – wnętrze jak nowe.",
    },
    {
      icon: faShieldAlt,
      title: "Pełna Dyskrecja",
      description:
        "Nie pytam, nie opowiadam. Twoja prywatność jest priorytetem.",
    },
    {
      icon: faMusic,
      title: "Spokój i Komfort",
      description: "Subtelna muzyka lub cisza – Ty decydujesz.",
    },
    {
      icon: faLanguage,
      title: "Komunikacja",
      description: "Rozmawiam po polsku i angielsku – bez barier.",
    },
    {
      icon: faTools,
      title: "Zawsze przygotowany",
      description: "Auto gotowe nawet na najbardziej wymagające przejazdy.",
    },
    {
      icon: faGem,
      title: "Klasa i styl",
      description: "Nie tylko pojazd, ale cała obsługa w duchu premium.",
    },
    {
      icon: faSlidersH,
      title: "Drobiazgi mają znaczenie",
      description: "Od temperatury wnętrza po muzykę — wszystko pod Ciebie.",
    },
  ];

  return (
    <>
      <div className="about-me-container" data-aos="fade-up">
        <Helmet>
          <title>O mnie – Taxi Premium Lexus ES300h Kielce</title>
          <meta
            name="description"
            content="Poznaj właściciela i kierowcę usługi premium taxi Lexus ES300h w Kielcach. Dowiedz się, dlaczego warto skorzystać z naszej oferty."
          />
        </Helmet>
        <div className="about-me-photo" data-aos="fade-up">
          <img
            src="/images/driver-side.webp"
            alt="Moje zdjecie"
            loading="lazy"
            width="400"
            height="600"
          />
        </div>
        <div className="about-me-text" data-aos="fade-up">
          <h2>O Mnie</h2>
          <p>
            Mam duże doświadczenie jako kierowca, specjalizując się w usługach
            premium. Przez wiele lat miałem okazję pracować z klientami z
            różnych branż, a także z celebrytami. Moje doświadczenie obejmuje
            przewóz gwiazd filmowych, sportowców, w tym także kierowców Formuły
            1 w Londynie, gdzie miałem przyjemność świadczyć usługi dla
            najbardziej wymagających pasażerów.
          </p>
          <p>
            Moja praca jest moją pasją, dlatego zawsze dbam o najwyższy poziom
            komfortu i bezpieczeństwa podczas każdego kursu. Zawdzięczam to nie
            tylko moim umiejętnościom, ale także samochodowi, którym podróżują
            pasażerowie – Lexus ES300h, który zapewnia niezwykły komfort i
            wygodę na każdej trasie.
          </p>
          <p>
            Moje usługi są dedykowane wszystkim, którzy cenią sobie luksus,
            spokój i bezpieczeństwo podczas podróży. Zawsze staram się
            dostosować do potrzeb moich pasażerów, oferując usługi transportowe
            najwyższej jakości.
          </p>
        </div>
      </div>
      <div className="aboutMe-services-container" data-aos="fade-up">
        <h3>Nasze Usługi</h3>
        <div className="aboutMe-services-list">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
      <section className="standards-section" data-aos="fade-up">
        <div className="standards-header">
          <h2>Moje Standardy</h2>
          <p>
            Każdy kurs to nie tylko przejazd – to doświadczenie klasy premium.
          </p>
        </div>
        <div className="standards-grid">
          {standards.map((standard, index) => (
            <StandardItem
              key={index}
              icon={standard.icon}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default memo(AboutMe);
