import { describe, expect, it } from 'vitest';
import { isValidNickname, sanitizeNickname } from '@features/hangman/domain/player';

describe('player', () => {
  it('sanitizes nickname whitespace', () => {
    expect(sanitizeNickname('  Player   One  ')).toBe('Player One');
  });

  it('validates minimum nickname length', () => {
    expect(isValidNickname('A')).toBe(false);
    expect(isValidNickname('Ana')).toBe(true);
  });
});
