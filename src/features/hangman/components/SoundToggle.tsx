import { useTranslation } from 'react-i18next';
import { useSound } from '@features/hangman/audio/useSound';

export function SoundToggle() {
  const { t } = useTranslation();
  const { enabled, toggle } = useSound();

  return (
    <button
      aria-label={enabled ? t('sound.on') : t('sound.off')}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-lg shadow-lg backdrop-blur-md transition hover:bg-slate-800/90 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-400"
      onClick={toggle}
      type="button"
    >
      {enabled ? '🔊' : '🔇'}
    </button>
  );
}
