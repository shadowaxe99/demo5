import { useSpring, animated } from 'react-spring';

export const AnimatedPageTransition = ({ children }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  });

  return <animated.div style={animationProps}>{children}</animated.div>;
};