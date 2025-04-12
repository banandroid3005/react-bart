import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const removeGoogleTranslateBar = () => {
    const frame = document.querySelector("iframe.goog-te-banner-frame");
    if (frame) {
      frame.remove();
    }

    const overlay = document.querySelector(".goog-te-banner-frame");
    if (overlay) {
      overlay.remove();
    }
  };

  const translateToEnglish = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "en"; // Ustaw język angielski
      select.dispatchEvent(new Event("change"));
    }
    removeGoogleTranslateBar(); // Usuń pasek tłumaczenia
  };

  const resetTranslation = () => {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "googtrans=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    const url = new URL(window.location.href);
    url.searchParams.delete("googtrans");
    window.history.replaceState({}, document.title, url.toString());

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = ""; // Resetuj język do domyślnego
      select.dispatchEvent(new Event("change"));
    }

    removeGoogleTranslateBar(); // Usuń pasek tłumaczenia
    window.location.reload(); // Odśwież stronę, aby upewnić się, że tłumaczenie zostało zresetowane
  };

  useEffect(() => {
    removeGoogleTranslateBar(); // Usuń pasek tłumaczenia po załadowaniu strony
  }, []);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "pl",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false, // Wyłącza automatyczne wyświetlanie paska
        },
        "google_translate_element"
      );
    };

    // Usuń pasek tłumaczenia po załadowaniu strony
    removeGoogleTranslateBar();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Bart Premium Services
          </Link>
          <div className="language-switcher">
            <button onClick={resetTranslation} className="lang-btn">
              🇵🇱
            </button>
            <button onClick={translateToEnglish} className="lang-btn">
              🇬🇧
            </button>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Usługi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/car" className="nav-links" onClick={closeMobileMenu}>
                Auto
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                O mnie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;