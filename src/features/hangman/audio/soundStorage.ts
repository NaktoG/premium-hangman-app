import { SOUNDS_CONFIG } from '@features/hangman/config/sounds.config';

export function getSoundEnabled(): boolean {
  try {
    const stored = localStorage.getItem(SOUNDS_CONFIG.storageKey);
    return stored === null ? true : stored === 'true';
  } catch {
    return true;
  }
}

export function setSoundEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(SOUNDS_CONFIG.storageKey, String(enabled));
  } catch {
    // localStorage unavailable — silently ignore
  }
}
