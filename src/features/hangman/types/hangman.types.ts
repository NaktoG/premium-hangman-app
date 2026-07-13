export type GameStatus = 'playing' | 'won' | 'lost';

export type VisibleLetter = {
  id: string;
  label: string;
  value: string;
  isRevealed: boolean;
  isSeparator: boolean;
};

export type HangmanState = {
  originalWord: string;
  normalizedWord: string;
  revealedIndexes: number[];
  failedLetters: string[];
  status: GameStatus;
  remainingHelpSeconds: number;
};

export type GuessResult = {
  state: HangmanState;
  isCorrect: boolean;
};
