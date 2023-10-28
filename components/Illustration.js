```javascript
import React from 'react';
import styled from 'styled-components';

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const IllustrationImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Illustration = ({ src, alt }) => {
  return (
    <IllustrationWrapper>
      <IllustrationImg src={src} alt={alt} />
    </IllustrationWrapper>
  );
};

export default Illustration;
```