```javascript
import { useState } from 'react';

export const useClickReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(!isRevealed);
  };

  return { isRevealed, handleClick };
};
```