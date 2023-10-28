```javascript
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import { GlobalStyle } from '../styles/GlobalStyle';
import { usePageTransitions } from '../hooks/usePageTransitions';

const Page = ({ children }) => {
  const router = useRouter();
  const transitions = usePageTransitions(router);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {transitions.map(({ item, key, props }) =>
        item && (
          <animated.div key={key} style={props}>
            {children}
          </animated.div>
        )
      )}
    </div>
  );
};

export default Page;
```