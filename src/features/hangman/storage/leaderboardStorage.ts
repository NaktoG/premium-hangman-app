import { addLeaderboardEntry, createLeaderboardEntry, sortLeaderboard } from '@features/hangman/domain/leaderboard';
import type { LeaderboardEntry } from '@features/hangman/types/hangman.types';

const STORAGE_KEY = 'premium-hangman-leaderboard';

function isLeaderboardEntry(value: unknown): value is LeaderboardEntry {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const entry = value as Record<string, unknown>;
  return (
    typeof entry.id === 'string' &&
    typeof entry.nickname === 'string' &&
    typeof entry.timeSeconds === 'number' &&
    typeof entry.completedAt === 'string' &&
    typeof entry.word === 'string'
  );
}

export function getLeaderboard(): LeaderboardEntry[] {
  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? sortLeaderboard(parsedValue.filter(isLeaderboardEntry)) : [];
  } catch {
    return [];
  }
}

export function saveWinningScore(nickname: string, timeSeconds: number, word: string): LeaderboardEntry[] {
  const nextLeaderboard = addLeaderboardEntry(getLeaderboard(), createLeaderboardEntry(nickname, timeSeconds, word));
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextLeaderboard));

  return nextLeaderboard;
}
