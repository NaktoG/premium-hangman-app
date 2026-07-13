import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import { WORDS } from '@features/hangman/data/words';
import { normalizeWord } from '@features/hangman/domain/normalizeWord';
import { selectRandomWord } from '@features/hangman/domain/selectRandomWord';
import type { HangmanState } from '@features/hangman/types/hangman.types';

export function createInitialGameState(random = Math.random): HangmanState {
  const originalWord = selectRandomWord(WORDS, random);

  return {
    originalWord,
    normalizedWord: normalizeWord(originalWord),
    revealedIndexes: [],
    failedLetters: [],
    status: 'playing',
    remainingHelpSeconds: HANGMAN_CONFIG.helpIntervalSeconds,
  };
}
