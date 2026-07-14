import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { HANGMAN_CONFIG } from '@features/hangman/config/hangman.config';
import type { VisibleLetter } from '@features/hangman/types/hangman.types';
import { VisuallyHidden } from '@shared/components/VisuallyHidden';

type LetterInputProps = {
  disabled: boolean;
  index: number;
  letter: VisibleLetter;
  onGuess: (index: number, value: string) => void;
};

export function LetterInput({ disabled, index, letter, onGuess }: LetterInputProps) {
  const { t } = useTranslation();
  const inputId = useId();

  if (letter.isSeparator) {
    return (
      <div className="flex h-14 w-7 items-center justify-center text-2xl font-bold text-slate-400 sm:h-16 sm:w-10">
        <VisuallyHidden>{t('game.separator')}</VisuallyHidden>
        <span aria-hidden="true">/</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="sr-only" htmlFor={inputId}>
        {t('game.characterLabel', { position: index + 1 })}
      </label>
      <motion.div
        animate={letter.isRevealed ? { scale: 1, opacity: 1, y: 0 } : { scale: 1, opacity: 1, y: 0 }}
        initial={letter.isRevealed ? { scale: 0.6, opacity: 0, y: 8 } : false}
        transition={letter.isRevealed ? { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } : undefined}
      >
        <input
          aria-label={t('game.characterLabel', { position: index + 1 })}
          autoComplete="off"
          className="h-14 w-12 rounded-2xl border border-white/10 bg-white/10 text-center text-2xl font-extrabold uppercase text-white shadow-inner shadow-black/25 transition focus:bg-white/15 disabled:border-cyan-100/20 disabled:bg-cyan-300/15 disabled:text-cyan-100 sm:h-16 sm:w-14 sm:text-3xl"
          disabled={disabled || letter.isRevealed}
          id={inputId}
          inputMode="text"
          maxLength={HANGMAN_CONFIG.inputMaxLength}
          onChange={(event) => onGuess(index, event.currentTarget.value)}
          type="text"
          value={letter.value}
        />
      </motion.div>
    </div>
  );
}
