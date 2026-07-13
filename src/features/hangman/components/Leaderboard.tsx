import { useTranslation } from 'react-i18next';
import { formatDuration } from '@features/hangman/domain/formatDuration';
import type { LeaderboardEntry } from '@features/hangman/types/hangman.types';

type LeaderboardProps = {
  entries: LeaderboardEntry[];
};

export function Leaderboard({ entries }: LeaderboardProps) {
  const { t } = useTranslation();

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-premium backdrop-blur-xl sm:p-6" aria-labelledby="leaderboard-title">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-100/70">{t('leaderboard.eyebrow')}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-white" id="leaderboard-title">
            {t('leaderboard.title')}
          </h2>
        </div>
        <div className="rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">{t('leaderboard.topLabel')}</div>
      </div>

      {entries.length === 0 ? (
        <p className="mt-6 rounded-3xl border border-dashed border-white/15 p-5 text-sm leading-6 text-slate-300">{t('leaderboard.empty')}</p>
      ) : (
        <ol className="mt-6 grid gap-3">
          {entries.map((entry, index) => (
            <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/35 p-3" key={entry.id}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-300/15 text-sm font-extrabold text-cyan-100">#{index + 1}</span>
              <div className="min-w-0">
                <p className="truncate font-bold text-white">{entry.nickname}</p>
                <p className="truncate text-xs text-slate-400">{entry.word}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-extrabold text-white">{formatDuration(entry.timeSeconds)}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
