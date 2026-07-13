import { useEffect, useMemo, useState } from 'react';
import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import { createInitialGameState } from '@features/hangman/domain/createInitialGameState';
import { applyGuess, buildVisibleLetters, revealRandomLetter } from '@features/hangman/domain/gameRules';

export function useHangmanGame() {
  const [state, setState] = useState(() => createInitialGameState());

  useEffect(() => {
    if (state.status !== 'playing') {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setState((currentState) => {
        if (currentState.status !== 'playing') {
          return currentState;
        }

        if (currentState.remainingHelpSeconds > 1) {
          return { ...currentState, remainingHelpSeconds: currentState.remainingHelpSeconds - 1 };
        }

        return revealRandomLetter(currentState);
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [state.status]);

  const visibleLetters = useMemo(() => buildVisibleLetters(state), [state]);

  function guessLetter(index: number, value: string) {
    setState((currentState) => applyGuess(currentState, value, index).state);
  }

  function restart() {
    setState(createInitialGameState());
  }

  return {
    originalWord: state.originalWord,
    status: state.status,
    failedLetters: state.failedLetters,
    errorCount: state.failedLetters.length,
    maxErrors: HANGMAN_CONFIG.maxErrors,
    remainingHelpSeconds: state.remainingHelpSeconds,
    visibleLetters,
    isFinished: state.status !== 'playing',
    guessLetter,
    restart,
  };
}
