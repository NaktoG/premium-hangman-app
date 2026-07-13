import { useTranslation } from 'react-i18next';
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
    <div aria-label={t('game.boardLabel')} className="flex flex-wrap justify-center gap-3 sm:gap-4" role="group">
      {letters.map((letter, index) => (
        <LetterInput disabled={disabled} index={index} key={letter.id} letter={letter} onGuess={onGuess} />
      ))}
    </div>
  );
}
