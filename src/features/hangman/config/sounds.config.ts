export const SOUNDS_CONFIG = {
  basePath: '/sounds',
  volume: {
    sfx: 0.6,
    music: 0.3,
  },
  files: {
    correct: 'correct.mp3',
    error: 'error.mp3',
    win: 'win.mp3',
    lose: 'lose.mp3',
    reveal: 'reveal.mp3',
  },
  storageKey: 'hangman-sound-enabled',
} as const;
