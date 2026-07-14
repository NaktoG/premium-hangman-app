import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { staggerContainer, boardItem } from '@features/hangman/animations/animationVariants';

export function HowToPlay() {
  const { t } = useTranslation();
  const steps = [t('howToPlay.step1'), t('howToPlay.step2'), t('howToPlay.step3'), t('howToPlay.step4')];

  return (
    <motion.section
      aria-labelledby="how-to-play-title"
      className="mt-8 rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">{t('howToPlay.eyebrow')}</p>
      <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl" id="how-to-play-title">
        {t('howToPlay.title')}
      </h2>

      <motion.ol className="mt-6 grid gap-4" variants={staggerContainer} initial="hidden" animate="visible">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.04] px-5 py-4"
            variants={boardItem}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">
              {i + 1}
            </span>
            <p className="pt-1 text-base leading-6 text-slate-300">{step}</p>
          </motion.li>
        ))}
      </motion.ol>
    </motion.section>
  );
}
