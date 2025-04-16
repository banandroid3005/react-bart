import React, { useEffect, useRef } from "react";
import "./AboutMe.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faPlaneDeparture,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  const aboutMeContainerRef = useRef(null);
  const aboutMePhotoRef = useRef(null);
  const aboutMeTextRef = useRef(null);
  const servicesContainerRef = useRef(null);
  const serviceRefs = useRef([]);
  const faqContainerRef = useRef(null);
  const faqItemRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    });

    // Observe main sections
    if (aboutMeContainerRef.current)
      observer.observe(aboutMeContainerRef.current);
    if (aboutMePhotoRef.current) observer.observe(aboutMePhotoRef.current);
    if (aboutMeTextRef.current) observer.observe(aboutMeTextRef.current);
    if (servicesContainerRef.current)
      observer.observe(servicesContainerRef.current);
    if (faqContainerRef.current) observer.observe(faqContainerRef.current);

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.classList.add(`delay-${(index % 3) + 1}`);
        observer.observe(ref);
      }
    });

    faqItemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.classList.add(`delay-${(index % 3) + 1}`);
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

  const setFaqItemRef = (element, index) => {
    faqItemRefs.current[index] = element;
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
      <div className="aboutMe-faq-container" ref={faqContainerRef}>
        <h3>Najczęściej zadawane pytania</h3>
        <div className="aboutMe-faq-list">
          <div className="aboutMe-faq-item" ref={(el) => setFaqItemRef(el, 0)}>
            <h4>Jakie usługi oferujesz?</h4>
            <p>
              Oferujemy transport VIP, przewóz na lotniska, transfery na eventy
              oraz indywidualne usługi transportowe.
            </p>
          </div>
          <div className="aboutMe-faq-item" ref={(el) => setFaqItemRef(el, 1)}>
            <h4>Czy mogę zamówić taxi na długi dystans?</h4>
            <p>
              Oczywiście, oferujemy również transport na długie dystanse, w tym
              transfery na lotniska w Polsce i Europie.
            </p>
          </div>
          <div className="aboutMe-faq-item" ref={(el) => setFaqItemRef(el, 2)}>
            <h4>Jak mogę zarezerwować kurs?</h4>
            <p>Rezerwacji można dokonać telefonicznie lub poprzez mail.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
