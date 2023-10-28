import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.i`
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

const Icon = ({ name, size, color }) => {
  return <IconWrapper className={`icon-${name}`} size={size} color={color} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: '1em',
  color: 'currentColor',
};

export default Icon;