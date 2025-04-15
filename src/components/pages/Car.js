import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Car.css";
import lexusImage1 from "../../images/lexus.webp";
import lexusImage2 from "../../images/face.webp";
import lexusImage3 from "../../images/lexus.webp";
import { Helmet } from "react-helmet";

const imageDescriptions = [
  "Elegancka sylwetka Lexusa ES300h",
  "Komfortowe wnętrze premium",
  "Nowoczesny design i dbałość o detale",
];

function Car() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(true);

  // Załaduj obrazy przy montowaniu komponentu
  useEffect(() => {
    const imagesList = [lexusImage1, lexusImage2, lexusImage3];
    const loadImages = async () => {
      try {
        // Preload images
        const promises = imagesList.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          });
        });
        
        await Promise.all(promises);
        setImages(imagesList);
        setIsImagesLoaded(true);
      } catch (error) {
        console.error("Problem z ładowaniem obrazów:", error);
        // Ustaw domyślne obrazy w przypadku błędu
        setImages(imagesList);
        setIsImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  const openLightbox = useCallback((index) => {
    if (!isImagesLoaded) return;
    setCurrentImage(index);
    setIsLightboxOpen(true);
    setHasAnimated(true);
    // Zapobieganie przewijaniu strony, gdy lightbox jest otwarty
    document.body.style.overflow = 'hidden';
  }, [isImagesLoaded]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    // Przywrócenie przewijania strony po zamknięciu lightboxa
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (!isImagesLoaded || images.length === 0) return;
    setCurrentImage((prev) => (prev + 1) % images.length);
    setHasAnimated(true);
  }, [images, isImagesLoaded]);

  const prevImage = useCallback(() => {
    if (!isImagesLoaded || images.length === 0) return;
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setHasAnimated(true);
  }, [images, isImagesLoaded]);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!touchStart) return;
      const touchEnd = e.changedTouches[0].clientX;
      const swipeThreshold = 50;
      if (touchStart - touchEnd > swipeThreshold) {
        nextImage();
      } else if (touchEnd - touchStart > swipeThreshold) {
        prevImage();
      }
      setTouchStart(null);
    },
    [touchStart, nextImage, prevImage]
  );

  // Obsługa klawiszy strzałek dla lightboxa
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, nextImage, prevImage, closeLightbox]);

  // Czyszczenie stylów przy odmontowaniu komponentu
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    // Główny kontener strony
    <div className="car-page-container">
      <Helmet>
        <title>Lexus ES300h | Twoja Podróż Premium w Kielcach</title>
        <meta
          name="description"
          content="Doświadcz najwyższego komfortu i stylu podróżując naszym Lexusem ES300h. Zamów przejazd premium taxi w Kielcach i poczuj różnicę."
        />
      </Helmet>

      {/* === Sekcja Wprowadzająca (Nagłówek + Galeria) === */}
      <section className="car-intro-section">
        {/* Nagłówek wewnątrz sekcji */}
        <div className="section-heading intro-heading">
          <h1>Podróżuj w Klasie Premium</h1>
          <p>
            Odkryj wyjątkowy komfort i elegancję naszego Lexusa ES300h,
            dostępnego dla Ciebie w ramach usług Taxi Premium Kielce.
          </p>
        </div>

        {/* Galeria wewnątrz sekcji */}
        <div className="car-gallery-wrapper">
          {isImagesLoaded ? (
            <>
              <div
                className="car-gallery"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="arrow prev" onClick={prevImage}>&#8249;</div>
                <div
                  className="image-wrapper"
                  onClick={() => openLightbox(currentImage)}
                >
                  <img
                    src={images[currentImage]}
                    alt={`Lexus ES300h - ${imageDescriptions[currentImage] || `Widok ${currentImage + 1}`}`}
                    className="car-img"
                    loading="eager"
                  />
                </div>
                <div className="arrow next" onClick={nextImage}>&#8250;</div>
              </div>
              <div className="gallery-thumbnails">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                    onClick={() => { setCurrentImage(index); setHasAnimated(true); }}
                    loading="eager"
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="gallery-loading">
              <div className="loader"></div>
              <p>Ładowanie galerii...</p>
            </div>
          )}
        </div>
      </section>
      {/* === Koniec Sekcji Wprowadzającej === */}

      {/* --- Lightbox --- */}
      {isLightboxOpen && isImagesLoaded && (
        <div
          className={`lightbox ${isLightboxOpen ? "visible" : ""}`}
          ref={lightboxRef}
          onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}
        >
          <div className="lightbox-content">
            <span className="close-btn" onClick={closeLightbox}>&times;</span>
            <img
              src={images[currentImage]}
              alt={`Lexus ES300h - ${imageDescriptions[currentImage] || `Widok ${currentImage + 1}`} (powiększenie)`}
              className={`car-img ${hasAnimated ? "animate-once" : ""}`}
              onAnimationEnd={() => setHasAnimated(false)}
            />
            <div className="arrow prev lightbox-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#8249;</div>
            <div className="arrow next lightbox-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#8250;</div>
          </div>
        </div>
      )}

      {/* === Sekcja Doświadczenia Pasażera === */}
      <section className="car-experience-section">
        <div className="section-heading">
          <h2>Poczuj Różnicę Premium</h2>
          <p>Nasze usługi i Lexus ES300h to gwarancja najwyższej jakości podróży.</p>
        </div>
        <div className="experience-grid">
          {/* Blok Komfort */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-couch"></i></div>
            <h3>Oaza Spokoju i Komfortu</h3>
            <p>Zrelaksuj się w przestronnym wnętrzu wykończonym miękką skórą. Podgrzewane i wentylowane fotele oraz cichy napęd hybrydowy zapewnią Ci idealne warunki do odpoczynku lub pracy.</p>
          </div>
          {/* Blok Styl */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-gem"></i></div>
            <h3>Elegancja w Każdym Calu</h3>
            <p>Perłowy lakier, dynamiczna linia nadwozia i starannie zaprojektowane wnętrze z ambientowym oświetleniem sprawią, że poczujesz się wyjątkowo, przybywając na miejsce z klasą.</p>
          </div>
          {/* Blok Bezpieczeństwo */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Podróżuj Bezpiecznie</h3>
            <p>Twoje bezpieczeństwo jest dla nas priorytetem. Lexus ES300h wyposażony jest w zaawansowany pakiet Lexus Safety System +, który dba o Twój spokój podczas całej podróży.</p>
          </div>
          {/* Blok Technologia */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-wifi"></i></div>
            <h3>Nowoczesne Udogodnienia</h3>
            <p>Korzystaj z nowoczesnego systemu multimedialnego, wysokiej klasy nagłośnienia i automatycznej klimatyzacji z funkcją oczyszczania powietrza Nanoe™ X. Dostępne porty USB naładują Twoje urządzenia.</p>
          </div>
          {/* Blok Punktualność */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-clock"></i></div>
            <h3>Zawsze na Czas</h3>
            <p>Cenimy Twój czas. Gwarantujemy punktualność i niezawodność, dzięki czemu możesz bez stresu planować swoje spotkania biznesowe, podróże lotnicze czy ważne wydarzenia.</p>
          </div>
          {/* Blok Dyskrecja */}
          <div className="experience-block">
            <div className="experience-icon"><i className="fas fa-user-shield"></i></div>
            <h3>Dyskrecja i Prywatność</h3>
            <p>Zapewniamy pełną dyskrecję podczas każdej podróży. Ciemne szyby oraz profesjonalne podejście naszego kierowcy gwarantują prywatność i komfortowe warunki do rozmów lub odpoczynku.</p>
          </div>
        </div>
      </section>
      {/* === Koniec Sekcji Doświadczenia === */}

      {/* === Sekcja Kluczowych Atutów (Lista) === */}
      <section className="car-highlights-section">
        <div className="section-heading">
          <h2>Kluczowe Atuty Naszego Lexusa</h2>
          <p>Co wyróżnia naszą ofertę premium?</p>
        </div>
        {/* Struktura listy */}
        <div className="highlights-list-container">
          <ul className="highlights-list">
            <li className="highlight-entry">
              <i className="fas fa-leaf highlight-icon"></i>
              <span className="highlight-text">Cichy i Ekologiczny Napęd Hybrydowy</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-chair highlight-icon"></i>
              <span className="highlight-text">Luksusowa Skórzana Tapicerka</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-thermometer-half highlight-icon"></i>
              <span className="highlight-text">Fotele Podgrzewane i Wentlowane</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-volume-up highlight-icon"></i>
              <span className="highlight-text">Nagłośnienie Klasy Premium</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-star highlight-icon"></i>
              <span className="highlight-text">Najwyższy Standard Bezpieczeństwa</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-wind highlight-icon"></i>
              <span className="highlight-text">Klimatyzacja z Oczyszczaniem Powietrza Nanoe™ X</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-user-tie highlight-icon"></i>
              <span className="highlight-text">Profesjonalny i Dyskretny Kierowca</span>
            </li>
            <li className="highlight-entry">
              <i className="fas fa-calendar-check highlight-icon"></i>
              <span className="highlight-text">Gwarancja Punktualności</span>
            </li>
          </ul>
        </div>
      </section>
      {/* === Koniec Sekcji Kluczowych Atutów === */}

      {/* --- Sekcja Wezwania do Działania (CTA) --- */}
      <section className="car-cta-section">
        <h2>Gotowy na Podróż Klasy Premium?</h2>
        <p>
          Zarezerwuj przejazd naszym Lexusem ES300h i doświadcz komfortu,
          na jaki zasługujesz.
        </p>
        <a href="/kontakt" className="cta-button">
          Zamów Przejazd Teraz
        </a>
      </section>

    </div> // Koniec .car-page-container
  );
}

export default Car;