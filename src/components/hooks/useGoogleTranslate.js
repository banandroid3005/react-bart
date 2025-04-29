import { useCallback } from 'react';

// Stałe dla selektorów i nazwy cookie
const GOOGLE_TRANSLATE_COMBO_SELECTOR = '.goog-te-combo';
const GOOGLE_TRANSLATE_BANNER_SELECTOR = 'iframe.goog-te-banner-frame';
const GOOGLE_TRANSLATE_MENU_FRAME_SELECTOR = '.goog-te-menu-frame';
const GOOGLE_TRANSLATE_MENU_SELECTOR = '.goog-te-menu2';
const GOOGLE_TRANSLATE_COOKIE_NAME = 'googtrans';

// Funkcja pomocnicza do usuwania elementu z DOM
const removeElement = (selector) => {
  try {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
      // Czasami Google dodaje styl 'top' do body, resetujemy go
      if (selector === GOOGLE_TRANSLATE_BANNER_SELECTOR) {
          document.body.style.top = '';
      }
    }
  } catch (error) {
    console.error(`Error removing Google Translate element (${selector}):`, error);
  }
};

// Funkcja pomocnicza do usuwania ciasteczka
const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // Czasami potrzebny jest też taki format
};

export const useGoogleTranslate = () => {

  const removeGoogleTranslateWidgetParts = useCallback(() => {
    // Usuwa różne części widżetu Google Translate
    removeElement(GOOGLE_TRANSLATE_BANNER_SELECTOR);
    removeElement(GOOGLE_TRANSLATE_MENU_FRAME_SELECTOR);
    removeElement(GOOGLE_TRANSLATE_MENU_SELECTOR);
  }, []);

  const triggerGoogleTranslateChange = useCallback((langValue) => {
    // Wyzwala zmianę języka w widżecie Google
    try {
      const select = document.querySelector(GOOGLE_TRANSLATE_COMBO_SELECTOR);
      if (select) {
        select.value = langValue;
        select.dispatchEvent(new Event('change'));
      } else {
        console.warn('Google Translate select element not found.');
      }
    } catch (error) {
      console.error('Error triggering Google Translate change:', error);
    }
  }, []);

  const resetTranslation = useCallback(() => {
    // Resetuje tłumaczenie - UWAGA: Manipulacja DOM, ciasteczkami, historią
    console.log('Attempting to reset translation without reload...');
    try {
      // 1. Wyczyść ciasteczka Google Translate
      deleteCookie(GOOGLE_TRANSLATE_COOKIE_NAME);

      // 2. Usuń parametr 'googtrans' z URL bez przeładowania
      const url = new URL(window.location.href);
      if (url.searchParams.has(GOOGLE_TRANSLATE_COOKIE_NAME)) {
          url.searchParams.delete(GOOGLE_TRANSLATE_COOKIE_NAME);
          window.history.replaceState({}, document.title, url.toString());
          console.log('Removed googtrans from URL');
      }

      triggerGoogleTranslateChange('');
      console.log('Triggered change event on select');

      setTimeout(removeGoogleTranslateWidgetParts, 150);

      // 5. OSTATECZNOŚĆ: Jeśli powyższe kroki nie działają, odkomentuj poniższą linię.
      // Pamiętaj, że przeładowanie strony jest bardzo nieefektywne w SPA.
      window.location.reload();
      // console.log('Reload fallback was required (or is still commented out).');

    } catch (error) {
      console.error('Error resetting translation:', error);
      // W razie błędu, można rozważyć przeładowanie jako fallback
      // window.location.reload();
    }
  }, [removeGoogleTranslateWidgetParts, triggerGoogleTranslateChange]);

  const switchToLanguage = useCallback((langCode) => {
      // Przełącza na wybrany język
      triggerGoogleTranslateChange(langCode);
      // Usuń pasek po zmianie (może się pojawić ponownie)
      setTimeout(removeGoogleTranslateWidgetParts, 150);
  }, [removeGoogleTranslateWidgetParts, triggerGoogleTranslateChange]);

  // Zwracamy funkcje, które komponent NavBar będzie mógł użyć
  return { resetTranslation, switchToLanguage, removeGoogleTranslateWidgetParts };
};