import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import type { PropsWithChildren } from 'react';
import { en } from '@features/hangman/i18n/en';
import { es } from '@features/hangman/i18n/es';

const DEFAULT_LANGUAGE = 'es';

if (!i18next.isInitialized) {
  void i18next.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: { escapeValue: false },
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
  });
}

export function I18nProvider({ children }: PropsWithChildren) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
