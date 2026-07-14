import type { Variants } from 'motion/react';
import { ANIMATION_CONFIG } from '@features/hangman/config/animations.config';

const { durations, easing } = ANIMATION_CONFIG;

export const letterReveal: Variants = {
  hidden: { scale: 0.6, opacity: 0, y: 8 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easing.bounce },
  },
};

export const letterError: Variants = {
  hidden: { x: 0 },
  visible: {
    x: [0, -6, 6, -4, 4, 0],
    transition: { duration: durations.normal },
  },
};

export const helpPulse: Variants = {
  idle: { scale: 1 },
  pulse: {
    scale: [1, 1.04, 1],
    transition: { duration: durations.slow, repeat: Infinity, ease: easing.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: durations.staggerChild },
  },
};

export const boardItem: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.normal, ease: easing.smooth },
  },
};

export const figurePart: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: durations.slow, ease: easing.smooth },
  },
};

export const dialogBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.fast } },
  exit: { opacity: 0, transition: { duration: durations.fast } },
};

export const dialogContent: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easing.snappy },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: durations.fast } },
};
