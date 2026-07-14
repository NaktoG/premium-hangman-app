export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    staggerChild: 0.06,
  },
  easing: {
    bounce: [0.34, 1.56, 0.64, 1],
    smooth: [0.25, 0.1, 0.25, 1],
    snappy: [0.2, 0, 0, 1],
  },
} as const;
