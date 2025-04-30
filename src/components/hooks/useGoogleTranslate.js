import { useCallback, useRef } from "react";

// Stałe dla selektorów i nazwy cookie
const SELECTORS = {
  combo: ".goog-te-combo",
  banner: "iframe.goog-te-banner-frame",
  menuFrame: ".goog-te-menu-frame",
  menu: ".goog-te-menu2",
};

const COOKIE_NAME = "googtrans";

/**
 * Hook do zarządzania Google Translate na stronie
 *
 * @returns {Object} Interfejs do zarządzania Google Translate
 */
export const useGoogleTranslate = () => {
  // Używamy referencji do timeoutów, aby móc je anulować
  const timeoutsRef = useRef([]);

  /**
   * Czyści wszystkie zarejestrowane timeouty
   */
  const clearAllTimeouts = useCallback(() => {
    while (timeoutsRef.current.length) {
      clearTimeout(timeoutsRef.current.pop());
    }
  }, []);

  /**
   * Usuwa element z DOM na podstawie selektora
   *
   * @param {string} selector - Selektor CSS elementu do usunięcia
   */
  const removeElement = useCallback((selector) => {
    try {
      const element = document.querySelector(selector);
      if (element) {
        element.remove();
        // Przywracamy normalne zachowanie strony jeśli to był banner
        if (selector === SELECTORS.banner) {
          document.body.style.removeProperty("top");
          document.body.style.removeProperty("position");
        }
      }
    } catch (error) {
      console.error(`Błąd podczas usuwania elementu (${selector}):`, error);
    }
  }, []);

  /**
   * Usuwa wszystkie elementy Google Translate z DOM
   */
  const removeGoogleTranslateWidgetParts = useCallback(() => {
    // Usuwamy widoczne elementy interfejsu Google Translate
    removeElement(SELECTORS.banner);
    removeElement(SELECTORS.menuFrame);

    // Próbujemy dostać się do menu wewnątrz iframe (jeśli istnieje)
    const menuFrames = document.querySelectorAll(SELECTORS.menuFrame);
    menuFrames.forEach((frame) => {
      try {
        if (frame.contentDocument) {
          const menu = frame.contentDocument.querySelector(SELECTORS.menu);
          if (menu) menu.remove();
        }
      } catch (e) {
        // Ignorujemy błędy CORS
      }
    });

    // Przywracamy normalne zachowanie dokumentu
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("position");
    document.body.classList.remove("translated-ltr", "translated-rtl");

    // Usuwamy style Google Translate, jeśli istnieją
    const gtStyleElem = document.getElementById(":1.container");
    if (gtStyleElem) gtStyleElem.remove();
  }, [removeElement]);

  /**
   * Usuwa ciasteczka Google Translate
   */
  const deleteCookies = useCallback(() => {
    // Lista domen i ścieżek do wyczyszczenia ciasteczek
    const domains = [
      document.location.hostname,
      `.${document.location.hostname}`,
      "",
    ];
    const paths = ["/", ""];
    const cookieValues = ["", "/", "/auto/pl", "/pl/en", "/en/pl"];

    // Systematycznie usuwamy wszystkie możliwe warianty ciasteczek
    domains.forEach((domain) => {
      paths.forEach((path) => {
        cookieValues.forEach((value) => {
          const cookieString = `${COOKIE_NAME}=${value}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}${
            domain ? `; domain=${domain}` : ""
          };`;
          document.cookie = cookieString;
        });
      });
    });
  }, []);

  /**
   * Wywołuje zmianę języka w widżecie Google Translate
   *
   * @param {string} langCode - Kod języka (np. 'en', 'pl' lub '' dla resetowania)
   * @returns {boolean} - True jeśli operacja zakończyła się powodzeniem
   */
  const triggerGoogleTranslateChange = useCallback((langCode) => {
    try {
      const select = document.querySelector(SELECTORS.combo);
      if (!select) {
        return false;
      }

      // Ustawiamy wartość i wywołujemy zdarzenie
      select.value = langCode;

      // Obsługa nowoczesnych i starszych przeglądarek
      if (typeof Event === "function") {
        select.dispatchEvent(new Event("change"));
      } else {
        const event = document.createEvent("Event");
        event.initEvent("change", true, true);
        select.dispatchEvent(event);
      }

      return true;
    } catch (error) {
      console.error("Błąd podczas zmiany języka:", error);
      return false;
    }
  }, []);

  /**
   * Resetuje tłumaczenie do języka polskiego
   */
  const resetTranslation = useCallback(() => {
    // Anulujemy wszystkie timeouty, które mogą być w toku
    clearAllTimeouts();

    try {
      // Czyszczenie ciasteczek
      deleteCookies();

      // Usuwamy parametr googtrans z URL
      const url = new URL(window.location.href);
      if (url.searchParams.has(COOKIE_NAME)) {
        url.searchParams.delete(COOKIE_NAME);
        window.history.replaceState({}, document.title, url.toString());
      }

      // Bezpośrednio usuwamy wszystkie ślady po Google Translate
      // Nie próbujemy już zmieniać wartości w <select>
      removeGoogleTranslateWidgetParts();

      // Dodajemy opóźnione wywołanie czyszczenia dla pewności,
      // gdyby GT próbowało coś przywrócić asynchronicznie.
      // Możesz dostosować lub usunąć ten timeout, jeśli nie jest potrzebny.
      const ensureCleanupTimeout = setTimeout(removeGoogleTranslateWidgetParts, 350); // Niewielkie opóźnienie
      timeoutsRef.current.push(ensureCleanupTimeout);

      // Ustawiamy język dokumentu na polski (oryginalny)
      document.documentElement.setAttribute("lang", "pl");

    } catch (error) {
      console.error("Błąd podczas resetowania tłumaczenia (powrót do oryginału):", error);
    }
    window.location.reload(); // Odświeżamy stronę, aby zastosować zmiany
  }, [
    clearAllTimeouts,
    deleteCookies,
    removeGoogleTranslateWidgetParts, // triggerGoogleTranslateChange usunięty z zależności
  ]);
  /**
   * Przełącza na wybrany język
   *
   * @param {string} langCode - Kod języka (np. 'en')
   */
  const switchToLanguage = useCallback(
    (langCode) => {
      // Anulujemy wszystkie timeouty
      clearAllTimeouts();

      try {
        // Czyszczenie ciasteczek i URL
        deleteCookies();

        // Usuwamy parametr googtrans z URL
        const url = new URL(window.location.href);
        if (url.searchParams.has(COOKIE_NAME)) {
          url.searchParams.delete(COOKIE_NAME);
          window.history.replaceState({}, document.title, url.toString());
        }

        // Przełączamy na wybrany język
        if (triggerGoogleTranslateChange(langCode)) {
          // Usuwamy elementy UI Google Translate z opóźnieniem
          const timeoutId = setTimeout(() => {
            removeGoogleTranslateWidgetParts();

            // Drugi timeout dla pewności
            const secondTimeoutId = setTimeout(
              removeGoogleTranslateWidgetParts,
              300
            );
            timeoutsRef.current.push(secondTimeoutId);
          }, 100);

          timeoutsRef.current.push(timeoutId);
        }

        // Ustawiamy atrybuty dokumentu dla dostępności
        document.documentElement.setAttribute("lang", langCode);
      } catch (error) {
        console.error(`Błąd podczas przełączania na język ${langCode}:`, error);
      }
    },
    [
      clearAllTimeouts,
      deleteCookies,
      triggerGoogleTranslateChange,
      removeGoogleTranslateWidgetParts,
    ]
  );

  return {
    resetTranslation,
    switchToLanguage,
    removeGoogleTranslateWidgetParts,
  };
};
