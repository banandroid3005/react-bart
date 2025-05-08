import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useGoogleTranslate } from './hooks/useGoogleTranslate.js';
import "./NavBar.css";

const NAV_ITEMS = [
  { to: "/", text: "Home" },
  { to: "/Usługi", text: "Usługi" },
  { to: "/Auto", text: "Auto" },
  { to: "/Kontakt", text: "Kontakt" },
  { to: "/O-mnie", text: "O mnie" },
];

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

  const handleClick = useCallback(() => setClick(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setClick(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    if (!throttledScrollHandlerRef.current) {
      throttledScrollHandlerRef.current = throttle(handleScroll, 150);
    }
    handleScroll();
    window.addEventListener("scroll", throttledScrollHandlerRef.current);

    cleanupTimeoutRef.current = setTimeout(removeGoogleTranslateWidgetParts, 500);

    return () => {
      window.removeEventListener("scroll", throttledScrollHandlerRef.current);
      if (cleanupTimeoutRef.current) {
        clearTimeout(cleanupTimeoutRef.current);
      }
    };
  }, [removeGoogleTranslateWidgetParts]);

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

  const handleLogoClick = useCallback(() => {
    resetTranslation();
    setCurrentLang('pl');
    closeMobileMenu();
  }, [resetTranslation, closeMobileMenu]);

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
            loading="eager"
            width="375" 
            height="120"
            fetchpriority="high"
          />
        </Link>

        <div className="navbar-controls-right">
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
          <div
            className="menu-icon"
            onClick={handleClick}
            role="button" 
            aria-label={click ? "Zamknij menu nawigacyjne" : "Otwórz menu nawigacyjne"}
            aria-expanded={click}
            tabIndex={0}
          >
            ☰
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