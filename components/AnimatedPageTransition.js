```javascript
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedPageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: '100vw',
      scale: 1.2
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={children.key}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPageTransition;
```