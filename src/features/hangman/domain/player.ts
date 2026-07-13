import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';

export function sanitizeNickname(value: string): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, HANGMAN_CONFIG.nicknameMaxLength);
}

export function isValidNickname(value: string): boolean {
  return sanitizeNickname(value).length >= HANGMAN_CONFIG.nicknameMinLength;
}
