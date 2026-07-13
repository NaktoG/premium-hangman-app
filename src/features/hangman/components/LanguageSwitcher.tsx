import { useTranslation } from 'react-i18next';
import { Button } from '@shared/components/Button';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? 'es';
  const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';

  function handleChangeLanguage() {
    void i18n.changeLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <Button
      aria-label={nextLanguage === 'es' ? t('actions.switchToSpanish') : t('actions.switchToEnglish')}
      className="w-fit self-start sm:self-auto"
      onClick={handleChangeLanguage}
      type="button"
      variant="secondary"
    >
      {currentLanguage.toUpperCase()} / {nextLanguage.toUpperCase()}
    </Button>
  );
}
