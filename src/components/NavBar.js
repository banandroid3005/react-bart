import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useGoogleTranslate } from './hooks/useGoogleTranslate.js'; // Upewnij się, że ścieżka jest poprawna
import "./NavBar.css";

// Definicja linków nawigacyjnych
const navItems = [
  { to: "/", text: "Home" },
  { to: "/Usługi", text: "Usługi" },
  { to: "/Auto", text: "Auto" },
  { to: "/Kontakt", text: "Kontakt" },
  { to: "/O-mnie", text: "O mnie" },
];

// Prosta implementacja throttle
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

function NavBar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resetTranslation, switchToLanguage, removeGoogleTranslateWidgetParts } = useGoogleTranslate();

  // Używamy ref, aby uniknąć dodawania throttledScrollHandler do zależności useEffect
  const throttledScrollHandlerRef = useRef(null);

  // Funkcje obsługi menu
  const handleClick = useCallback(() => setClick((prevClick) => !prevClick), []);
  const closeMobileMenu = useCallback(() => setClick(false), []);

  // Efekt do obsługi scrolla i początkowego czyszczenia widżetu GT
  useEffect(() => {
    // Funkcja sprawdzająca pozycję scrolla
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Tworzymy throttled handler tylko raz
    if (!throttledScrollHandlerRef.current) {
        throttledScrollHandlerRef.current = throttle(handleScroll, 150); // Throttle co 150ms
    }

    // Wywołaj raz na początku, aby ustawić stan
    handleScroll();
    // Dodaj listener
    window.addEventListener("scroll", throttledScrollHandlerRef.current);

    // Początkowe usunięcie paska GT (z opóźnieniem, na wypadek gdyby ładował się asynchronicznie)
    const initialCleanupTimeout = setTimeout(removeGoogleTranslateWidgetParts, 500);

    // Cleanup function
    return () => {
      if (throttledScrollHandlerRef.current) {
          window.removeEventListener("scroll", throttledScrollHandlerRef.current);
      }
      clearTimeout(initialCleanupTimeout);
    };
  }, [removeGoogleTranslateWidgetParts]); // removeGoogleTranslateWidgetParts jest zależnością

  // Wywołanie funkcji z hooka dla przycisków
  const handleResetLang = useCallback(() => {
      resetTranslation();
      closeMobileMenu(); // Zamknij menu mobilne, jeśli było otwarte
  }, [resetTranslation, closeMobileMenu]);

  const handleSwitchToEn = useCallback(() => {
      switchToLanguage('en');
      closeMobileMenu(); // Zamknij menu mobilne
  }, [switchToLanguage, closeMobileMenu]);


  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo - kliknięcie resetuje język i zamyka menu */}
          <Link to="/" className="navbar-logo" onClick={handleResetLang}>
            <span>Bart Premium Services</span>
            {/* Dodaj rzeczywiste wymiary, aby uniknąć CLS */}
            <img
              src="/images/logo.webp"
              alt="Logo Bart Premium Services"
              loading="lazy"
              width="150" /* Przykładowa szerokość */
              height="50" /* Przykładowa wysokość */
            />
          </Link>

          <div className="navbar-controls-right">
            {/* Przełącznik języków */}
            <div className="language-switcher">
              <button onClick={handleResetLang} className="lang-btn" aria-label="Przełącz na język polski">
                PL
              </button>
              <button onClick={handleSwitchToEn} className="lang-btn" aria-label="Switch to English language">
                EN
              </button>
            </div>

            {/* Ikona Menu */}
            <div
              className="menu-icon"
              onClick={handleClick}
              role="button"
              aria-label={click ? "Zamknij menu nawigacyjne" : "Otwórz menu nawigacyjne"}
              aria-expanded={click}
              tabIndex={0} // Umożliwia fokusowanie
            >
              <i className={click ? "fas fa-times" : "fas fa-bars"} aria-hidden="true"></i> {/* Ikona jest dekoracyjna */}
            </div>
          </div>

          {/* Menu nawigacyjne */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  to={item.to}
                  className="nav-links"
                  onClick={closeMobileMenu} // Zamyka menu po kliknięciu linku
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;