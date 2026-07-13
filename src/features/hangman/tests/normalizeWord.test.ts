import { describe, expect, it } from 'vitest';
import { normalizeWord } from '@features/hangman/domain/normalizeWord';

describe('normalizeWord', () => {
  it('normalizes accents, casing and extra spaces', () => {
    expect(normalizeWord('  Héctor  ')).toBe('hector');
    expect(normalizeWord('MARÍA')).toBe('maria');
  });
});
