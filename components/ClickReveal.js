```javascript
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

const Content = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const ClickReveal = ({ children, revealContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={handleClick}>
      {children}
      <Content isOpen={isOpen}>{revealContent}</Content>
    </Wrapper>
  );
};

ClickReveal.propTypes = {
  children: PropTypes.node.isRequired,
  revealContent: PropTypes.node.isRequired,
};

export default ClickReveal;
```