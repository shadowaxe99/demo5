// data/animations.js

export const pageTransitionAnimations = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export const scrollAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const clickRevealAnimations = {
  hidden: { height: 0 },
  show: {
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
};

export const presenterModeAnimations = {
  hidden: { opacity: 0.5 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};