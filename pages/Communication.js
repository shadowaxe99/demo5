import React from 'react';
import { useRouter } from 'next/router';
import { usePageTransitions } from '../hooks/usePageTransitions';
import { usePresenterMode } from '../hooks/usePresenterMode';
import Page from '../components/Page';
import Section from '../components/Section';
import TextHighlight from '../components/TextHighlight';
import pitchDeckData from '../data/pitchDeckData';

const Communication = () => {
  const router = useRouter();
  const { handlePageTransition } = usePageTransitions();
  const { presenterModeEnabled } = usePresenterMode();

  const { communication } = pitchDeckData;

  const handleClick = (path) => {
    if (presenterModeEnabled) return;
    handlePageTransition(path);
  };

  return (
    <Page title="Communication" onNavClick={handleClick}>
      <Section>
        <TextHighlight>{communication.title}</TextHighlight>
        <p>{communication.description}</p>
      </Section>
    </Page>
  );
};

export default Communication;