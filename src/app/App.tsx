import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '@app/Footer';
import { ElapsedTimer } from '@features/hangman/components/ElapsedTimer';
import { ErrorCounter } from '@features/hangman/components/ErrorCounter';
import { GameBoard } from '@features/hangman/components/GameBoard';
import { GameResultDialog } from '@features/hangman/components/GameResultDialog';
import { HangmanFigure } from '@features/hangman/components/HangmanFigure';
import { HelpTimer } from '@features/hangman/components/HelpTimer';
import { Leaderboard } from '@features/hangman/components/Leaderboard';
import { LanguageSwitcher } from '@features/hangman/components/LanguageSwitcher';
import { SoundToggle } from '@features/hangman/components/SoundToggle';
import { StartScreen } from '@features/hangman/components/StartScreen';
import { useHangmanGame } from '@features/hangman/hooks/useHangmanGame';
import { getLeaderboard, saveWinningScore } from '@features/hangman/storage/leaderboardStorage';
import type { LeaderboardEntry } from '@features/hangman/types/hangman.types';

type AppScreen = 'start' | 'game';

export function App() {
  const { t } = useTranslation();
  const [screen, setScreen] = useState<AppScreen>('start');
  const [nickname, setNickname] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => getLeaderboard());
  const recordedWinKeyRef = useRef<string | null>(null);
  const game = useHangmanGame({ enabled: screen === 'game' });

  useEffect(() => {
    if (screen !== 'game' || game.status !== 'won' || !nickname) {
      return;
    }

    const winKey = `${nickname}-${game.originalWord}-${game.elapsedSeconds}`;

    if (recordedWinKeyRef.current === winKey) {
      return;
    }

    recordedWinKeyRef.current = winKey;
    setLeaderboard(saveWinningScore(nickname, game.elapsedSeconds, game.originalWord));
  }, [game.elapsedSeconds, game.originalWord, game.status, nickname, screen]);

  function handleStart(nextNickname: string) {
    setNickname(nextNickname);
    recordedWinKeyRef.current = null;
    game.restart();
    setScreen('game');
  }

  function handleRestart() {
    recordedWinKeyRef.current = null;
    game.restart();
  }

  return (
    <main className="min-h-dvh overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(168,85,247,0.24),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]" />
      <section className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          {screen === 'game' ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">{t('app.eyebrow')}</p>
              <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                {t('app.title')}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{t('app.description')}</p>
            </div>
          ) : (
            <div aria-hidden="true" />
          )}
          <LanguageSwitcher />
        </header>

        {screen === 'start' ? (
          <StartScreen leaderboard={leaderboard} onStart={handleStart} />
        ) : (
          <div className="grid flex-1 items-center gap-5 py-8 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-premium backdrop-blur-xl sm:p-6 lg:p-8">
              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <ElapsedTimer seconds={game.elapsedSeconds} />
                <HelpTimer seconds={game.remainingHelpSeconds} />
                <ErrorCounter current={game.errorCount} max={game.maxErrors} failedLetters={game.failedLetters} />
              </div>
              <GameBoard letters={game.visibleLetters} disabled={game.isFinished} onGuess={game.guessLetter} />
            </section>

            <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] xl:grid-cols-1">
              <aside className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-premium backdrop-blur-xl sm:p-6 lg:p-8">
                <HangmanFigure errors={game.errorCount} maxErrors={game.maxErrors} />
              </aside>
              <Leaderboard entries={leaderboard} />
            </div>
          </div>
        )}
      </section>
      <Footer />

      <GameResultDialog status={game.status} word={game.originalWord} onRestart={handleRestart} />
      <SoundToggle />
    </main>
  );
}
