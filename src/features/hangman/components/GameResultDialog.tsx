import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { GameStatus } from '@features/hangman/types/hangman.types';
import { Button } from '@shared/components/Button';
import { Dialog } from '@shared/components/Dialog';

type GameResultDialogProps = {
  status: GameStatus;
  word: string;
  onRestart: () => void;
};

const DIALOG_TITLE_ID = 'game-result-title';

export function GameResultDialog({ onRestart, status, word }: GameResultDialogProps) {
  const { t } = useTranslation();
  const isOpen = status === 'won' || status === 'lost';
  const title = status === 'won' ? t('game.winnerTitle') : t('game.loserTitle');
  const message = status === 'won' ? t('game.winnerMessage', { word }) : t('game.loserMessage', { word });
  const handleClose = useCallback(() => onRestart(), [onRestart]);

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} titleId={DIALOG_TITLE_ID}>
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Premium Hangman</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl" id={DIALOG_TITLE_ID}>
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">{message}</p>
        <Button className="mt-8 w-full sm:w-auto" onClick={onRestart} type="button">
          {t('actions.restart')}
        </Button>
      </div>
    </Dialog>
  );
}
