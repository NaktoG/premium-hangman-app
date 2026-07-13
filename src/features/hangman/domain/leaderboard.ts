import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import type { LeaderboardEntry } from '@features/hangman/types/hangman.types';

export function createLeaderboardEntry(nickname: string, timeSeconds: number, word: string, now = new Date()): LeaderboardEntry {
  return {
    id: `${now.toISOString()}-${nickname}-${timeSeconds}`,
    nickname,
    timeSeconds,
    completedAt: now.toISOString(),
    word,
  };
}

export function sortLeaderboard(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  return [...entries]
    .sort((left, right) => {
      if (left.timeSeconds !== right.timeSeconds) {
        return left.timeSeconds - right.timeSeconds;
      }

      return left.completedAt.localeCompare(right.completedAt);
    })
    .slice(0, HANGMAN_CONFIG.leaderboardLimit);
}

export function addLeaderboardEntry(entries: LeaderboardEntry[], entry: LeaderboardEntry): LeaderboardEntry[] {
  return sortLeaderboard([...entries, entry]);
}
