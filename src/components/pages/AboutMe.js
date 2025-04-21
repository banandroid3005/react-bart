import React, { useEffect, useRef } from "react";
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

function AboutMe() {
  const aboutMeContainerRef = useRef(null);
  const aboutMePhotoRef = useRef(null);
  const aboutMeTextRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const serviceRefs = useRef([]);
  const standardsSectionRef = useRef(null); // Add ref for standards section
  const standardItemRefs = useRef([]); // Add ref for individual standard items

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Dodano klasę visible do:", entry.target);
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    });

    if (aboutMeContainerRef.current)
      observer.observe(aboutMeContainerRef.current);
    if (aboutMePhotoRef.current) observer.observe(aboutMePhotoRef.current);
    if (aboutMeTextRef.current) observer.observe(aboutMeTextRef.current);
    if (servicesContainerRef.current)
      observer.observe(servicesContainerRef.current);
    // Removed the faqContainerRef observation
    if (standardsSectionRef.current)
      observer.observe(standardsSectionRef.current); // Observe standards section

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.classList.add(`delay-${(index % 3) + 1}`);
        observer.observe(ref);
      }
    });

    // Observe each standard item
    standardItemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setServiceRef = (element, index) => {
    serviceRefs.current[index] = element;
  };

  // Helper to set refs for standard items
  const setStandardItemRef = (element, index) => {
    standardItemRefs.current[index] = element;
  };

  return (
    <>
      <div className="about-me-container" ref={aboutMeContainerRef}>
        <Helmet>
          <title>O mnie – Taxi Premium Lexus ES300h Kielce</title>
          <meta
            name="description"
            content="Poznaj właściciela i kierowcę usługi premium taxi Lexus ES300h w Kielcach. Dowiedz się, dlaczego warto skorzystać z naszej oferty."
          />
        </Helmet>
        <div className="about-me-photo" ref={aboutMePhotoRef}>
          <img
            src={require("../../images/face.webp")}
            alt="Moje zdjecie"
            loading="lazy"
          />
        </div>
        <div className="about-me-text" ref={aboutMeTextRef}>
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
      <div className="aboutMe-services-container" ref={servicesContainerRef}>
        <h3>Nasze Usługi</h3>
        <div className="aboutMe-services-list">
          <div className="aboutMe-service" ref={(el) => setServiceRef(el, 0)}>
            <div className="aboutMe-service-icon">
              <FontAwesomeIcon icon={faCrown} />
            </div>
            <div className="aboutMe-service-text">
              <h4>Transport VIP</h4>
              <p>
                Oferujemy przewóz osób VIP, w tym celebrytów, sportowców i osób
                wymagających najwyższej jakości usług.
              </p>
            </div>
          </div>
          <div className="aboutMe-service" ref={(el) => setServiceRef(el, 1)}>
            <div className="aboutMe-service-icon">
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </div>
            <div className="aboutMe-service-text">
              <h4>Przewóz na lotnisko</h4>
              <p>
                Zapewniamy komfortowy transport na lotniska w Polsce i za
                granicą, z pełnym profesjonalizmem i punktualnością.
              </p>
            </div>
          </div>
          <div className="aboutMe-service" ref={(el) => setServiceRef(el, 2)}>
            <div className="aboutMe-service-icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div className="aboutMe-service-text">
              <h4>Transfery na eventy</h4>
              <p>
                Oferujemy usługi transportowe na wszelkiego rodzaju eventy,
                konferencje, wesela, koncerty i inne ważne wydarzenia.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Standards Section */}
      <section className="standards-section" ref={standardsSectionRef}>
        <div className="standards-header">
          <h2>Moje Standardy</h2>
          <p>
            Każdy kurs to nie tylko przejazd – to doświadczenie klasy premium.
          </p>
        </div>
        <div className="standards-grid">
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 0)}
          >
            <FontAwesomeIcon icon={faClock} className="standard-icon" />
            <h4>Punktualność</h4>
            <p>Na miejscu zawsze kilka minut przed czasem. Zawsze.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 1)}
          >
            <FontAwesomeIcon icon={faCar} className="standard-icon" />
            <h4>Perfekcyjna Czystość</h4>
            <p>Auto czyszczone po każdym kursie – wnętrze jak nowe.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 2)}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="standard-icon" />
            <h4>Pełna Dyskrecja</h4>
            <p>Nie pytam, nie opowiadam. Twoja prywatność jest priorytetem.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 3)}
          >
            <FontAwesomeIcon icon={faMusic} className="standard-icon" />
            <h4>Spokój i Komfort</h4>
            <p>Subtelna muzyka lub cisza – Ty decydujesz.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 4)}
          >
            <FontAwesomeIcon icon={faLanguage} className="standard-icon" />
            <h4>Komunikacja</h4>
            <p>Rozmawiam po polsku i angielsku – bez barier.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 5)}
          >
            <FontAwesomeIcon icon={faTools} className="standard-icon" />
            <h4>Zawsze przygotowany</h4>
            <p>Auto gotowe nawet na najbardziej wymagające przejazdy.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 6)}
          >
            <FontAwesomeIcon icon={faGem} className="standard-icon" />
            <h4>Klasa i styl</h4>
            <p>Nie tylko pojazd, ale cała obsługa w duchu premium.</p>
          </div>
          <div
            className="standard-item"
            ref={(el) => setStandardItemRef(el, 7)}
          >
            <FontAwesomeIcon icon={faSlidersH} className="standard-icon" />
            <h4>Drobiazgi mają znaczenie</h4>
            <p>Od temperatury wnętrza po muzykę — wszystko pod Ciebie.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
