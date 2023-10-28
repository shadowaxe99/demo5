```javascript
import React, { useState, useEffect } from 'react';

const PresenterMode = () => {
  const [presenterMode, setPresenterMode] = useState(false);

  const togglePresenterMode = () => {
    setPresenterMode(!presenterMode);
  };

  useEffect(() => {
    if (presenterMode) {
      // Add any additional logic for entering presenter mode
    } else {
      // Add any additional logic for exiting presenter mode
    }
  }, [presenterMode]);

  return (
    <div>
      <button onClick={togglePresenterMode}>
        {presenterMode ? 'Exit Presenter Mode' : 'Enter Presenter Mode'}
      </button>
      {presenterMode && (
        <div>
          {/* Add any additional components or logic for presenter mode */}
        </div>
      )}
    </div>
  );
};

export default PresenterMode;
```