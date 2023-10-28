```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { usePageTransitions } from '../hooks/usePageTransitions';
import Page from '../components/Page';
import Section from '../components/Section';
import TextHighlight from '../components/TextHighlight';
import pitchDeckData from '../data/pitchDeckData';

const Overview = () => {
  const router = useRouter();
  const { handleTransition } = usePageTransitions();

  const { overview } = pitchDeckData;

  return (
    <Page onTransition={handleTransition}>
      <Section>
        <h1>{overview.title}</h1>
        <p>
          <TextHighlight>{overview.visionTitle}</TextHighlight>: {overview.vision}
        </p>
        <p>
          <TextHighlight>{overview.missionTitle}</TextHighlight>: {overview.mission}
        </p>
        <p>
          <TextHighlight>{overview.valuesTitle}</TextHighlight>: {overview.values}
        </p>
      </Section>
    </Page>
  );
};

export default Overview;
```