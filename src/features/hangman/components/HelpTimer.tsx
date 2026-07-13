import { useTranslation } from 'react-i18next';

type HelpTimerProps = {
  seconds: number;
};

export function HelpTimer({ seconds }: HelpTimerProps) {
  const { t } = useTranslation();

  return (
    <article className="rounded-3xl border border-cyan-200/15 bg-cyan-300/10 p-4" aria-live="polite">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100/80">{t('game.helpTimer')}</p>
      <p className="mt-2 text-3xl font-extrabold text-cyan-100">{t('game.seconds', { count: seconds })}</p>
    </article>
  );
}
