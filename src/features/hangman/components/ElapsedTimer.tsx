import { useTranslation } from 'react-i18next';
import { formatDuration } from '@features/hangman/domain/formatDuration';

type ElapsedTimerProps = {
  seconds: number;
};

export function ElapsedTimer({ seconds }: ElapsedTimerProps) {
  const { t } = useTranslation();

  return (
    <article className="rounded-3xl border border-violet-200/15 bg-violet-300/10 p-4" aria-live="polite">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-100/80">{t('game.elapsedTime')}</p>
      <p className="mt-2 text-3xl font-extrabold text-violet-100">{formatDuration(seconds)}</p>
    </article>
  );
}
