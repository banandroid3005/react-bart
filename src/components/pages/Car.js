import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import "./Car.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faGem,
  faShieldAlt,
  faWifi,
  faClock,
  faUserShield,
  faLeaf,
  faChair,
  faThermometerHalf,
  faVolumeUp,
  faStar,
  faWind,
  faUserTie,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

// Dane statyczne przeniesione poza komponent
const imageListPaths = [
  "/images/front-doors.webp",
  "/images/interior.webp",
  "/images/interior-driver.webp",
  "/images/side.webp",
  "/images/trunk.webp",
];

const imageDescriptions = [
  "Elegancka sylwetka Lexusa ES300h",
  "Komfortowe wnętrze premium",
  "Nowoczesny design i dbałość o detale",
  "Widok boczny Lexusa ES300h",
  "Pojemny bagażnik Lexusa ES300h",
];

// Dane dla sekcji "Experience"
const experienceData = [
  {
    icon: faCouch,
    title: "Oaza Spokoju i Komfortu",
    text: "Zrelaksuj się w przestronnym wnętrzu wykończonym miękką skórą. Podgrzewane i wentylowane fotele oraz cichy napęd hybrydowy zapewnią Ci idealne warunki do odpoczynku lub pracy.",
  },
  {
    icon: faGem,
    title: "Nienaganna estetyka i dyskretna elegancja",
    text: "Każdy detal – od czystości wnętrza po wygląd kierowcy – jest dopracowany z myślą o najwyższych standardach. U nas luksus nie rzuca się w oczy – on po prostu jest.",
  },
  {
    icon: faShieldAlt,
    title: "Podróżuj Bezpiecznie",
    text: "Twoje bezpieczeństwo jest dla nas priorytetem. Lexus ES300h wyposażony jest w zaawansowany pakiet Lexus Safety System +, który dba o Twój spokój podczas całej podróży.",
  },
  {
    icon: faWifi,
    title: "Nowoczesne Udogodnienia",
    text: "Korzystaj z nowoczesnego systemu multimedialnego, wysokiej klasy nagłośnienia i automatycznej klimatyzacji z funkcją oczyszczania powietrza Nanoe™ X. Dostępne porty USB naładują Twoje urządzenia.",
  },
  {
    icon: faClock,
    title: "Zawsze na Czas",
    text: "Cenimy Twój czas. Gwarantujemy punktualność i niezawodność, dzięki czemu możesz bez stresu planować swoje spotkania biznesowe, podróże lotnicze czy ważne wydarzenia.",
  },
  {
    icon: faUserShield,
    title: "Dyskrecja i Prywatność",
    text: "Zapewniamy pełną dyskrecję podczas każdej podróży. Ciemne szyby oraz profesjonalne podejście naszego kierowcy gwarantują prywatność i komfortowe warunki do rozmów lub odpoczynku.",
  },
];

// Dane dla sekcji "Highlights"
const highlightsData = [
  { icon: faLeaf, text: "Cichy i Ekologiczny Napęd Hybrydowy" },
  { icon: faChair, text: "Luksusowa Skórzana Tapicerka" },
  { icon: faThermometerHalf, text: "Fotele Podgrzewane i Wentlowane" },
  { icon: faVolumeUp, text: "Nagłośnienie Klasy Premium" },
  { icon: faStar, text: "Najwyższy Standard Bezpieczeństwa" },
  { icon: faWind, text: "Klimatyzacja z Oczyszczaniem Powietrza Nanoe™ X" },
  { icon: faUserTie, text: "Profesjonalny i Dyskretny Kierowca" },
  { icon: faCalendarCheck, text: "Gwarancja Punktualności" },
];

const Car = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);

  // Optymalizacja preloadingu obrazów
  useEffect(() => {
    const controller = new AbortController();
    const loadImages = async () => {
      try {
        // Najpierw ładujemy tylko pierwsze zdjęcie dla szybszego renderowania
        const firstImg = new Image();
        firstImg.src = imageListPaths[0];
        await new Promise((resolve) => {
          firstImg.onload = resolve;
          firstImg.onerror = resolve; // Kontynuuj nawet przy błędzie
        });

        if (controller.signal.aborted) return;
        setLoadedImages([imageListPaths[0]]);
        setIsImagesLoaded(true);

        // Następnie ładujemy resztę obrazów w tle
        const otherImagePromises = imageListPaths.slice(1).map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null); // Kontynuuj z null przy błędzie
          });
        });

        const otherLoadedImages = await Promise.all(otherImagePromises);
        if (controller.signal.aborted) return;

        // Filtrujemy null wartości (błędne zdjęcia) i dodajemy do stanu
        const validImages = otherLoadedImages.filter((img) => img !== null);
        setLoadedImages((prev) => [...prev, ...validImages]);
      } catch (error) {
        console.error("Problem z ładowaniem obrazów:", error);
        if (!controller.signal.aborted) {
          setIsImagesLoaded(true); // Pozwalamy UI zareagować
        }
      }
    };

    loadImages();

    return () => {
      controller.abort();
    };
  }, []);

  // Memoizacja currentImageSrc
  const currentImageSrc = useMemo(() => {
    if (!isImagesLoaded || loadedImages.length === 0) return "";
    return loadedImages[currentImageIndex] || imageListPaths[currentImageIndex];
  }, [isImagesLoaded, loadedImages, currentImageIndex]);

  const openLightbox = useCallback(
    (index) => {
      if (!isImagesLoaded) return;
      setCurrentImageIndex(index);
      setIsLightboxOpen(true);
      // Używamy klasy CSS zamiast bezpośrednio manipulować stylem
      document.body.classList.add("lightbox-open");
    },
    [isImagesLoaded]
  );

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.classList.remove("lightbox-open");
  }, []);

  const nextImage = useCallback(() => {
    if (!isImagesLoaded || loadedImages.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % loadedImages.length);
  }, [isImagesLoaded, loadedImages.length]);

  const prevImage = useCallback(() => {
    if (!isImagesLoaded || loadedImages.length === 0) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + loadedImages.length) % loadedImages.length
    );
  }, [isImagesLoaded, loadedImages.length]);

  // Obsługa dotknięć - zoptymalizowana
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStart === null) return;
      const touchEnd = e.changedTouches[0].clientX;
      const swipeThreshold = 50;
      const deltaX = touchEnd - touchStart;

      if (deltaX < -swipeThreshold) {
        nextImage();
      } else if (deltaX > swipeThreshold) {
        prevImage();
      }
      setTouchStart(null);
    },
    [touchStart, nextImage, prevImage]
  );

  // Obsługa klawiatury
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextImage, prevImage, closeLightbox]);

  // Upewnienie się, że overflow jest resetowany przy odmontowaniu
  useEffect(() => {
    return () => {
      document.body.classList.remove("lightbox-open");
    };
  }, []);

  return (
    <div className="car-page-container">
      <Helmet>
        <title>Lexus ES300h | Twoja Podróż Premium w Kielcach</title>
        <meta
          name="description"
          content="Doświadcz najwyższego komfortu i stylu podróżując naszym Lexusem ES300h. Zamów przejazd premium taxi w Kielcach i poczuj różnicę."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" href="/images/front-doors.webp" as="image" />
      </Helmet>

      <section className="car-intro-section">
        <div className="section-heading intro-heading">
          <h1>Podróżuj w Klasie Premium</h1>
          <p>
            Odkryj wyjątkowy komfort i elegancję naszego Lexusa ES300h,
            dostępnego dla Ciebie w ramach usług Taxi Premium Kielce.
          </p>
        </div>
        <div className="car-gallery-wrapper">
          {!isImagesLoaded ? (
            <div className="gallery-loading">
              <div className="loader"></div>
              <p>Ładowanie galerii...</p>
            </div>
          ) : loadedImages.length > 0 ? (
            <>
              <div
                className="car-gallery"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <button
                  type="button"
                  className="arrow prev"
                  onClick={prevImage}
                  aria-label="Poprzednie zdjęcie"
                >
                  &#8249;
                </button>
                <div
                  className="image-wrapper"
                  onClick={() => openLightbox(currentImageIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openLightbox(currentImageIndex)
                  }
                  aria-label={`Otwórz powiększenie - ${
                    imageDescriptions[currentImageIndex] ||
                    `Widok ${currentImageIndex + 1}`
                  }`}
                >
                  <img
                    src={currentImageSrc}
                    alt={`Lexus ES300h - ${
                      imageDescriptions[currentImageIndex] ||
                      `Widok ${currentImageIndex + 1}`
                    }`}
                    className="car-img"
                    loading={currentImageIndex === 0 ? "eager" : "lazy"}
                    fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
                    width="800"
                    height="533"
                  />
                </div>
                <button
                  type="button"
                  className="arrow next"
                  onClick={nextImage}
                  aria-label="Następne zdjęcie"
                >
                  &#8250;
                </button>
              </div>
              <div className="gallery-thumbnails">
                {imageListPaths.map((img, index) => (
                  <img
                    key={`thumb-${index}`}
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className={`thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setCurrentImageIndex(index)
                    }
                    loading="lazy"
                    width="100"
                    height="67"
                    tabIndex={0}
                    role="button"
                    aria-label={`Wybierz zdjęcie ${index + 1}`}
                    aria-pressed={index === currentImageIndex}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="gallery-error">
              <p>Nie udało się załadować galerii.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox - załadowany tylko gdy potrzebny */}
      {isLightboxOpen && loadedImages.length > 0 && (
        <div
          className="lightbox visible"
          ref={lightboxRef}
          onClick={(e) => e.target === lightboxRef.current && closeLightbox()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-heading"
        >
          <div className="lightbox-content">
            <button
              type="button"
              className="close-btn"
              onClick={closeLightbox}
              aria-label="Zamknij galerię"
            >
              &times;
            </button>
            <img
              src={currentImageSrc}
              alt={`Lexus ES300h - ${
                imageDescriptions[currentImageIndex] ||
                `Widok ${currentImageIndex + 1}`
              } (powiększenie)`}
              className="car-img"
              id="lightbox-heading"
            />
            <button
              type="button"
              className="arrow prev lightbox-arrow"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Poprzednie zdjęcie"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="arrow next lightbox-arrow"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Następne zdjęcie"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <section className="car-experience-section">
        <div className="section-heading">
          <h2>Poczuj Różnicę Premium</h2>
          <p>
            Nasze usługi i Lexus ES300h to gwarancja najwyższej jakości podróży.
          </p>
        </div>
        <div className="experience-grid">
          {experienceData.map((item, index) => (
            <div className="experience-block" key={`exp-${index}`}>
              <div className="experience-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="car-highlights-section">
        <div className="section-heading">
          <h2>Kluczowe Atuty Naszego Lexusa</h2>
          <p>Co wyróżnia naszą ofertę premium?</p>
        </div>
        <div className="highlights-list-container">
          <ul className="highlights-list">
            {highlightsData.map((item, index) => (
              <li className="highlight-entry" key={`highlight-${index}`}>
                <FontAwesomeIcon icon={item.icon} className="highlight-icon" />
                <span className="highlight-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="car-cta-section">
        <h2>Gotowy na Podróż Klasy Premium?</h2>
        <p>
          Zarezerwuj przejazd naszym Lexusem ES300h i doświadcz komfortu, na
          jaki zasługujesz.
        </p>
        <Link to="/Kontakt" className="cta-button">
          Zamów Przejazd Teraz
        </Link>
      </section>
    </div>
  );
};

export default React.memo(Car);
