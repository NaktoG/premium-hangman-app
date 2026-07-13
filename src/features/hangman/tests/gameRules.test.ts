import { describe, expect, it } from 'vitest';
import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import { applyGuess, buildVisibleLetters, revealRandomLetter } from '@features/hangman/domain/gameRules';
import type { HangmanState } from '@features/hangman/types/hangman.types';

function createState(overrides: Partial<HangmanState> = {}): HangmanState {
  return {
    originalWord: 'Ana Maria',
    normalizedWord: 'ana maria',
    revealedIndexes: [],
    failedLetters: [],
    status: 'playing',
    remainingHelpSeconds: HANGMAN_CONFIG.helpIntervalSeconds,
    elapsedSeconds: 0,
    ...overrides,
  };
}

describe('gameRules', () => {
  it('builds visible letters without exposing hidden letters', () => {
    const letters = buildVisibleLetters(createState({ revealedIndexes: [0] }));

    expect(letters[0]?.value).toBe('A');
    expect(letters[1]?.value).toBe('');
    expect(letters[3]?.isSeparator).toBe(true);
  });

  it('reveals a correct guessed letter', () => {
    const result = applyGuess(createState(), 'A', 0);

    expect(result.isCorrect).toBe(true);
    expect(result.state.revealedIndexes).toEqual([0]);
    expect(result.state.failedLetters).toEqual([]);
  });

  it('does not count empty input as an error', () => {
    const result = applyGuess(createState(), '', 0);

    expect(result.state.failedLetters).toEqual([]);
    expect(result.state.status).toBe('playing');
  });

  it('counts unique failed letters only once', () => {
    const first = applyGuess(createState(), 'z', 0).state;
    const second = applyGuess(first, 'z', 0).state;

    expect(second.failedLetters).toEqual(['z']);
  });

  it('marks the game as won when every playable index is revealed', () => {
    const result = applyGuess(createState({ revealedIndexes: [0, 1, 2, 4, 5, 6, 7] }), 'a', 8);

    expect(result.state.status).toBe('won');
  });

  it('marks the game as lost at the configured error limit', () => {
    const result = applyGuess(createState({ failedLetters: ['b', 'c', 'd', 'e', 'f'] }), 'z', 0);

    expect(result.state.failedLetters).toHaveLength(HANGMAN_CONFIG.maxErrors);
    expect(result.state.status).toBe('lost');
  });

  it('reveals a hidden letter without recursion', () => {
    const state = revealRandomLetter(createState(), () => 0);

    expect(state.revealedIndexes).toEqual([0]);
  });
});
