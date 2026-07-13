import { useTranslation } from 'react-i18next';

type ErrorCounterProps = {
  current: number;
  max: number;
  failedLetters: string[];
};

export function ErrorCounter({ current, failedLetters, max }: ErrorCounterProps) {
  const { t } = useTranslation();

  return (
    <article className="rounded-3xl border border-rose-200/15 bg-rose-300/10 p-4" aria-live="polite">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-100/80">{t('game.errorCounter')}</p>
        <p className="text-2xl font-extrabold text-rose-100">
          {current}/{max}
        </p>
      </div>
      <p className="mt-3 text-sm text-slate-200">
        <span className="font-semibold">{t('game.failedLetters')}:</span>{' '}
        {failedLetters.length > 0 ? failedLetters.join(', ') : t('game.noFailedLetters')}
      </p>
    </article>
  );
}
