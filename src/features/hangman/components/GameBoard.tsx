import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, boardItem } from '@features/hangman/animations/animationVariants';
import { LetterInput } from '@features/hangman/components/LetterInput';
import type { VisibleLetter } from '@features/hangman/types/hangman.types';

type GameBoardProps = {
  disabled: boolean;
  letters: VisibleLetter[];
  onGuess: (index: number, value: string) => void;
};

export function GameBoard({ disabled, letters, onGuess }: GameBoardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      aria-label={t('game.boardLabel')}
      className="flex flex-wrap justify-center gap-3 sm:gap-4"
      initial="hidden"
      role="group"
      variants={staggerContainer}
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.div key={letter.id} variants={boardItem}>
          <LetterInput disabled={disabled} index={index} letter={letter} onGuess={onGuess} />
        </motion.div>
      ))}
    </motion.div>
  );
}
