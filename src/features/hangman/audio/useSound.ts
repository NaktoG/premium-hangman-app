import { useCallback, useEffect, useState } from 'react';
import { soundManager } from '@features/hangman/audio/soundManager';
import { getSoundEnabled, setSoundEnabled } from '@features/hangman/audio/soundStorage';

export function useSound() {
  const [enabled, setEnabled] = useState(getSoundEnabled);

  useEffect(() => {
    setSoundEnabled(enabled);
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((prev) => !prev), []);

  return { enabled, toggle, play: soundManager.play } as const;
}
