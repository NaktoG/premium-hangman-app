import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import { normalizeWord } from '@features/hangman/domain/normalizeWord';
import type { GuessResult, HangmanState, VisibleLetter } from '@features/hangman/types/hangman.types';

function isLetterSeparator(letter: string): boolean {
  return letter.trim().length === 0;
}

function getPlayableIndexes(word: string): number[] {
  return Array.from(word).flatMap((letter, index) => (isLetterSeparator(letter) ? [] : [index]));
}

function getUniqueIndexes(indexes: number[]): number[] {
  return Array.from(new Set(indexes)).sort((a, b) => a - b);
}

export function buildVisibleLetters(state: HangmanState): VisibleLetter[] {
  return Array.from(state.normalizedWord).map((letter, index) => {
    const isSeparator = isLetterSeparator(letter);
    const isRevealed = isSeparator || state.revealedIndexes.includes(index);

    return {
      id: `${state.originalWord}-${index}`,
      label: state.originalWord[index] ?? letter,
      value: isRevealed ? (state.originalWord[index] ?? letter) : '',
      isRevealed,
      isSeparator,
    };
  });
}

export function hasWon(state: HangmanState): boolean {
  const playableIndexes = getPlayableIndexes(state.normalizedWord);
  return playableIndexes.every((index) => state.revealedIndexes.includes(index));
}

export function hasLost(state: HangmanState): boolean {
  return state.failedLetters.length >= HANGMAN_CONFIG.maxErrors;
}

export function applyGuess(state: HangmanState, rawGuess: string, index: number): GuessResult {
  if (state.status !== 'playing') {
    return { state, isCorrect: false };
  }

  const guess = normalizeWord(rawGuess).at(0) ?? '';

  if (!guess) {
    return { state, isCorrect: false };
  }

  const expectedLetter = state.normalizedWord[index];
  const isCorrect = expectedLetter === guess;

  if (isCorrect) {
    const nextState = {
      ...state,
      revealedIndexes: getUniqueIndexes([...state.revealedIndexes, index]),
    };

    return {
      isCorrect,
      state: {
        ...nextState,
        status: hasWon(nextState) ? 'won' : 'playing',
      },
    };
  }

  const nextFailedLetters = state.failedLetters.includes(guess) ? state.failedLetters : [...state.failedLetters, guess];
  const nextState = {
    ...state,
    failedLetters: nextFailedLetters,
  };

  return {
    isCorrect,
    state: {
      ...nextState,
      status: hasLost(nextState) ? 'lost' : 'playing',
    },
  };
}

export function revealRandomLetter(state: HangmanState, random = Math.random): HangmanState {
  if (state.status !== 'playing') {
    return state;
  }

  const hiddenIndexes = getPlayableIndexes(state.normalizedWord).filter((index) => !state.revealedIndexes.includes(index));

  if (hiddenIndexes.length === 0) {
    return { ...state, status: 'won' };
  }

  const selectedIndex = hiddenIndexes[Math.floor(random() * hiddenIndexes.length)] ?? hiddenIndexes[0];

  if (selectedIndex === undefined) {
    return { ...state, status: 'won' };
  }

  const nextState = {
    ...state,
    revealedIndexes: getUniqueIndexes([...state.revealedIndexes, selectedIndex]),
    remainingHelpSeconds: HANGMAN_CONFIG.helpIntervalSeconds,
  };

  return {
    ...nextState,
    status: hasWon(nextState) ? 'won' : 'playing',
  };
}
