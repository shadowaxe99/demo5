import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 2rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;