import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const removeGoogleTranslateBar = () => {
    const frame = document.querySelector("iframe.goog-te-banner-frame");
    if (frame) {
      frame.remove();
    }
    const menuFrame = document.querySelector(".goog-te-menu-frame");
    if (menuFrame) {
      menuFrame.remove();
    }
    const menu = document.querySelector(".goog-te-menu2");
    if (menu) {
      menu.remove();
    }
  };

  const translateToEnglish = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }
    removeGoogleTranslateBar();
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
      select.value = "";
      select.dispatchEvent(new Event("change"));
    }
    removeGoogleTranslateBar();
    window.location.reload();
  };

  useEffect(() => {
    removeGoogleTranslateBar();
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span>Bart Premium Services</span>
            <img src="/images/logo.png" alt="Logo" />
          </Link>

          <div className="navbar-controls-right">
            <div className="language-switcher">
              <button onClick={resetTranslation} className="lang-btn">
                PL
              </button>
              <button onClick={translateToEnglish} className="lang-btn">
                EN
              </button>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Usługi"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Usługi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Auto" className="nav-links" onClick={closeMobileMenu}>
                Auto
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/O-mnie"
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
