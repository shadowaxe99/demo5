```javascript
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ScrollAnimation = ({ children, triggerOnce = true, threshold = 0.1, variants }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const animationRef = useRef(controls);

  useEffect(() => {
    if (inView) {
      animationRef.current.start('visible');
    } else {
      animationRef.current.start('hidden');
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {children(animationRef.current, variants)}
    </div>
  );
};

export default ScrollAnimation;
```