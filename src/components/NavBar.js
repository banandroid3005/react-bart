import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useGoogleTranslate } from './hooks/useGoogleTranslate.js';
import "./NavBar.css";

// Definicja linków nawigacyjnych jako stała poza komponentem
const NAV_ITEMS = [
  { to: "/", text: "Home" },
  { to: "/Usługi", text: "Usługi" },
  { to: "/Auto", text: "Auto" },
  { to: "/Kontakt", text: "Kontakt" },
  { to: "/O-mnie", text: "O mnie" },
];

// Prosta implementacja throttle jako funkcja poza komponentem
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// Komponent przycisku języka - wydzielony dla lepszej optymalizacji
const LanguageButton = memo(({ isActive, onClick, langCode, ariaLabel }) => (
  <button 
    onClick={onClick} 
    className={`lang-btn ${isActive ? 'active' : ''}`} 
    aria-label={ariaLabel}
    disabled={isActive}
  >
    {langCode}
  </button>
));

// Komponent linku nawigacyjnego - wydzielony dla lepszej optymalizacji
const NavItem = memo(({ to, text, onClick }) => (
  <li className="nav-item">
    <Link to={to} className="nav-links" onClick={onClick}>
      {text}
    </Link>
  </li>
));

function NavBar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('pl');
  const { resetTranslation, switchToLanguage, removeGoogleTranslateWidgetParts } = useGoogleTranslate();

  const throttledScrollHandlerRef = useRef(null);
  const cleanupTimeoutRef = useRef(null);

  // Funkcje obsługi menu
  const handleClick = useCallback(() => setClick(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setClick(false), []);

  // Efekt do obsługi scrolla i początkowego czyszczenia widżetu GT
  useEffect(() => {
    // Funkcja sprawdzająca pozycję scrolla
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Tworzymy throttled handler tylko raz
    if (!throttledScrollHandlerRef.current) {
      throttledScrollHandlerRef.current = throttle(handleScroll, 150);
    }

    // Ustawienie początkowego stanu i dodanie listenera
    handleScroll();
    window.addEventListener("scroll", throttledScrollHandlerRef.current);

    // Początkowe usunięcie paska GT
    cleanupTimeoutRef.current = setTimeout(removeGoogleTranslateWidgetParts, 500);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", throttledScrollHandlerRef.current);
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
    };
  }, [removeGoogleTranslateWidgetParts]);

  // Funkcje do przełączania języków
  const handleSwitchToPl = useCallback(() => {
    if (currentLang !== 'pl') {
      resetTranslation();
      setCurrentLang('pl');
      closeMobileMenu();
    }
  }, [resetTranslation, currentLang, closeMobileMenu]);

  const handleSwitchToEn = useCallback(() => {
    if (currentLang !== 'en') {
      switchToLanguage('en');
      setCurrentLang('en');
      closeMobileMenu();
    }
  }, [switchToLanguage, currentLang, closeMobileMenu]);

  // Obsługa kliknięcia w logo
  const handleLogoClick = useCallback(() => {
    resetTranslation();
    setCurrentLang('pl');
    closeMobileMenu();
  }, [resetTranslation, closeMobileMenu]);

  // Memoizacja listy nawigacyjnej dla lepszej wydajności
  const renderNavItems = useCallback(() => 
    NAV_ITEMS.map((item) => (
      <NavItem 
        key={item.to} 
        to={item.to} 
        text={item.text} 
        onClick={closeMobileMenu} 
      />
    )),
  [closeMobileMenu]);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <span>Bart Premium Services</span>
          <img
            src="/images/logo.webp"
            alt="Logo Bart Premium Services"
            loading="lazy"
            width="250" 
            height="80"
          />
        </Link>

        <div className="navbar-controls-right">
          {/* Przełącznik języków */}
          <div className="language-switcher">
            <LanguageButton 
              isActive={currentLang === 'pl'}
              onClick={handleSwitchToPl}
              langCode="PL"
              ariaLabel="Przełącz na język polski"
            />
            <LanguageButton 
              isActive={currentLang === 'en'}
              onClick={handleSwitchToEn}
              langCode="EN"
              ariaLabel="Switch to English language"
            />
          </div>

          {/* Ikona Menu */}
          <div
            className="menu-icon"
            onClick={handleClick}
            role="button" 
            aria-label={click ? "Zamknij menu nawigacyjne" : "Otwórz menu nawigacyjne"}
            aria-expanded={click}
            tabIndex={0}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
          </div>
        </div>

        {/* Menu nawigacyjne */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {renderNavItems()}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;