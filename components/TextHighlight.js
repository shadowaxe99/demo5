```javascript
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Highlight = styled.span`
  background-color: ${theme.colors.highlight};
  padding: 0.2em;
`;

const TextHighlight = ({ children }) => {
  return <Highlight>{children}</Highlight>;
};

export default TextHighlight;
```