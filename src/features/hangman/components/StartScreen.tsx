import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import { isValidNickname, sanitizeNickname } from '@features/hangman/domain/player';
import { HowToPlay } from '@features/hangman/components/HowToPlay';
import { Leaderboard } from '@features/hangman/components/Leaderboard';
import type { LeaderboardEntry } from '@features/hangman/types/hangman.types';
import { Button } from '@shared/components/Button';

type StartScreenProps = {
  leaderboard: LeaderboardEntry[];
  onStart: (nickname: string) => void;
};

export function StartScreen({ leaderboard, onStart }: StartScreenProps) {
  const { t } = useTranslation();
  const [nickname, setNickname] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sanitizedNickname = sanitizeNickname(nickname);
  const showError = hasSubmitted && !isValidNickname(sanitizedNickname);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);

    if (!isValidNickname(sanitizedNickname)) {
      return;
    }

    onStart(sanitizedNickname);
  }

  return (
    <div className="grid flex-1 items-center gap-6 py-8 lg:grid-cols-[1fr_0.82fr] lg:gap-8">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.08] p-5 shadow-premium backdrop-blur-xl sm:p-8 lg:p-10" aria-labelledby="start-title">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">{t('start.eyebrow')}</p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" id="start-title">
            {t('start.title')}
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{t('start.description')}</p>
        </div>

        <form className="mt-8 grid gap-4" noValidate onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-bold text-slate-200" htmlFor="nickname">
              {t('start.nicknameLabel')}
            </label>
            <input
              aria-describedby={showError ? 'nickname-error' : 'nickname-help'}
              aria-invalid={showError}
              autoComplete="nickname"
              className="mt-2 min-h-14 w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 text-lg font-bold text-white shadow-inner shadow-black/25 transition placeholder:text-slate-500 focus:bg-slate-950/65"
              id="nickname"
              maxLength={HANGMAN_CONFIG.nicknameMaxLength}
              onChange={(event) => setNickname(event.currentTarget.value)}
              placeholder={t('start.nicknamePlaceholder')}
              type="text"
              value={nickname}
            />
            <p className="mt-2 text-sm text-slate-400" id="nickname-help">
              {t('start.nicknameHelp', { min: HANGMAN_CONFIG.nicknameMinLength, max: HANGMAN_CONFIG.nicknameMaxLength })}
            </p>
            {showError && (
              <p className="mt-2 text-sm font-semibold text-rose-200" id="nickname-error" role="alert">
                {t('start.nicknameError')}
              </p>
            )}
          </div>

          <Button className="w-full sm:w-fit" type="submit">
            {t('start.startButton')}
          </Button>
        </form>
      </section>

      <Leaderboard entries={leaderboard} />

      <div className="lg:col-span-2">
        <HowToPlay />
      </div>
    </div>
  );
}
