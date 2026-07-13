import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { I18nProvider } from '@app/providers/I18nProvider';
import { useHangmanGame } from '@features/hangman/hooks/useHangmanGame';

describe('useHangmanGame', () => {
  it('exposes a playable game facade', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    const { result } = renderHook(() => useHangmanGame(), { wrapper: I18nProvider });

    expect(result.current.originalWord).toBe('Juan');
    expect(result.current.errorCount).toBe(0);

    act(() => result.current.guessLetter(0, 'j'));

    expect(result.current.visibleLetters[0]?.value).toBe('J');

    act(() => result.current.guessLetter(1, 'z'));

    expect(result.current.errorCount).toBe(1);

    vi.restoreAllMocks();
  });

  it('restarts the game with fresh state', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const { result } = renderHook(() => useHangmanGame(), { wrapper: I18nProvider });

    act(() => result.current.guessLetter(1, 'z'));
    expect(result.current.errorCount).toBe(1);

    act(() => result.current.restart());
    expect(result.current.errorCount).toBe(0);
    expect(result.current.status).toBe('playing');

    vi.restoreAllMocks();
  });
});
