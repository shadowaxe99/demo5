```javascript
import { useState, useEffect } from 'react';

const usePresenterMode = () => {
  const [isPresenterMode, setPresenterMode] = useState(false);

  const togglePresenterMode = () => {
    setPresenterMode(!isPresenterMode);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'p' && event.ctrlKey) {
        togglePresenterMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { isPresenterMode, togglePresenterMode };
};

export default usePresenterMode;
```