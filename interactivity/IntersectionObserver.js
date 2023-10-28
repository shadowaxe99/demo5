```javascript
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (elementRef, callback, options = {}) => {
  const observer = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      }, options);

      observer.current.observe(elementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elementRef, callback, options]);

  return observer.current;
};

export default useIntersectionObserver;
```