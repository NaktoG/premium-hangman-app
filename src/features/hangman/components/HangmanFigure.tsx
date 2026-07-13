import { useTranslation } from 'react-i18next';

type HangmanFigureProps = {
  errors: number;
  maxErrors: number;
};

const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'] as const;

export function HangmanFigure({ errors, maxErrors }: HangmanFigureProps) {
  const { t } = useTranslation();

  return (
    <div
      aria-label={t('game.figureLabel', { errors, maxErrors })}
      className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center rounded-[1.5rem] bg-[linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.72))] p-4"
      role="img"
    >
      <div className="absolute left-[18%] top-[12%] h-[72%] w-2 rounded-full bg-slate-500/70" />
      <div className="absolute left-[18%] top-[12%] h-2 w-[44%] rounded-full bg-slate-500/70" />
      <div className="absolute left-[58%] top-[12%] h-[15%] w-1 rounded-full bg-slate-500/70" />
      <div className="absolute bottom-[13%] left-[10%] h-2 w-[28%] rounded-full bg-slate-500/70" />

      <div className="relative mt-8 h-[58%] w-[42%]">
        {errors > parts.indexOf('head') && (
          <div className="absolute left-1/2 top-0 h-[26%] w-[42%] -translate-x-1/2 rounded-full border-4 border-cyan-100 shadow-[0_0_32px_rgba(103,232,249,0.28)]" />
        )}
        {errors > parts.indexOf('body') && <div className="absolute left-1/2 top-[25%] h-[38%] w-1 -translate-x-1/2 rounded-full bg-cyan-100" />}
        {errors > parts.indexOf('leftArm') && <div className="absolute left-[27%] top-[35%] h-[30%] w-1 rotate-45 rounded-full bg-cyan-100" />}
        {errors > parts.indexOf('rightArm') && <div className="absolute right-[27%] top-[35%] h-[30%] w-1 -rotate-45 rounded-full bg-cyan-100" />}
        {errors > parts.indexOf('leftLeg') && <div className="absolute bottom-[8%] left-[32%] h-[30%] w-1 rotate-[28deg] rounded-full bg-cyan-100" />}
        {errors > parts.indexOf('rightLeg') && <div className="absolute bottom-[8%] right-[32%] h-[30%] w-1 -rotate-[28deg] rounded-full bg-cyan-100" />}
      </div>
    </div>
  );
}
