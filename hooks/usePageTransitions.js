```javascript
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSpring, config } from 'react-spring';

const usePageTransitions = () => {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [transitionStyles, set] = useSpring(() => ({
    opacity: 1,
    transform: 'translate3d(0%,0,0)',
    config: config.slow,
  }));

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setTransitioning(true);
      set({ opacity: 0 });
    };

    const handleRouteChangeComplete = () => {
      setTransitioning(false);
      set({ opacity: 1 });
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);

  return { transitioning, transitionStyles };
};

export default usePageTransitions;
```