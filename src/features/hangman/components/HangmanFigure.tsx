import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';

type HangmanFigureProps = {
  errors: number;
  maxErrors: number;
};

const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'] as const;

export function HangmanFigure({ errors, maxErrors }: HangmanFigureProps) {
  const { t } = useTranslation();

  return (
    <figure
      aria-label={t('game.figureLabel', { errors, maxErrors })}
      className="mx-auto grid aspect-square w-full max-w-[520px] place-items-center rounded-[1.5rem] bg-[linear-gradient(145deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.72))] p-4 sm:p-6"
      role="img"
    >
      <svg aria-hidden="true" className="h-full max-h-[430px] w-full max-w-[430px]" viewBox="0 0 320 320">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M80 282h92" stroke="rgb(100 116 139 / 0.75)" strokeWidth="7" />
          <path d="M112 282V58" stroke="rgb(100 116 139 / 0.75)" strokeWidth="7" />
          <path d="M112 58h116" stroke="rgb(100 116 139 / 0.75)" strokeWidth="7" />
          <path d="M228 58v52" stroke="rgb(100 116 139 / 0.75)" strokeWidth="4" />

          <g filter="url(#hangman-glow)" stroke="rgb(207 250 254)">
            <AnimatePresence>
              {errors > parts.indexOf('head') && (
                <motion.circle
                  key="head"
                  cx="228"
                  cy="142"
                  r="30"
                  strokeWidth="4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                />
              )}
              {errors > parts.indexOf('body') && (
                <motion.path
                  key="body"
                  d="M228 172v76"
                  strokeWidth="5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {errors > parts.indexOf('leftArm') && (
                <motion.path
                  key="leftArm"
                  d="M226 188l-46 52"
                  strokeWidth="5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
              {errors > parts.indexOf('rightArm') && (
                <motion.path
                  key="rightArm"
                  d="M230 188l46 52"
                  strokeWidth="5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
              {errors > parts.indexOf('leftLeg') && (
                <motion.path
                  key="leftLeg"
                  d="M226 247l-38 46"
                  strokeWidth="5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
              {errors > parts.indexOf('rightLeg') && (
                <motion.path
                  key="rightLeg"
                  d="M230 247l38 46"
                  strokeWidth="5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="260" id="hangman-glow" width="220" x="120" y="80">
            <feDropShadow dx="0" dy="0" floodColor="rgb(103 232 249)" floodOpacity="0.35" stdDeviation="12" />
          </filter>
        </defs>
      </svg>
    </figure>
  );
}
