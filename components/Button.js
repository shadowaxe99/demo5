```javascript
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.fontSizes.md};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${theme.colors.gray};
    cursor: not-allowed;
  }
`;

const Button = ({ children, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
```