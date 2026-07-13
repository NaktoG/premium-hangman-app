import { describe, expect, it } from 'vitest';
import { addLeaderboardEntry, createLeaderboardEntry } from '@features/hangman/domain/leaderboard';

describe('leaderboard', () => {
  it('sorts entries by fastest time', () => {
    const slowEntry = createLeaderboardEntry('Slow', 42, 'Maria', new Date('2026-01-01T00:00:00.000Z'));
    const fastEntry = createLeaderboardEntry('Fast', 12, 'Juan', new Date('2026-01-01T00:01:00.000Z'));

    expect(addLeaderboardEntry([slowEntry], fastEntry)).toEqual([fastEntry, slowEntry]);
  });
});
