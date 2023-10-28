```javascript
import { motion } from 'framer-motion';

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInFromRight = {
  hidden: { x: '100vw' },
  visible: { x: 0 },
};

export const slideInFromLeft = {
  hidden: { x: '-100vw' },
  visible: { x: 0 },
};

export const TweenedComponent = ({ animation, children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={animation}
  >
    {children}
  </motion.div>
);
```