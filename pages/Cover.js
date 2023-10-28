```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { Navbar } from '../components/Navbar';
import { AnimatedPageTransition } from '../components/AnimatedPageTransition';
import { Section } from '../components/Section';
import { TextHighlight } from '../components/TextHighlight';
import { Button } from '../components/Button';
import { pitchDeckData } from '../data/pitchDeckData';
import { usePageTransitions } from '../hooks/usePageTransitions';

const Cover = () => {
  const router = useRouter();
  const { handlePageTransition } = usePageTransitions();

  const { companyName, tagline, logo } = pitchDeckData.cover;

  const navigateToOverview = () => {
    handlePageTransition('overview');
    router.push('/overview');
  };

  return (
    <Page>
      <Navbar />
      <AnimatedPageTransition>
        <Section>
          <img src={logo} alt={`${companyName} logo`} />
          <h1><TextHighlight>{companyName}</TextHighlight></h1>
          <h2>{tagline}</h2>
          <Button onClick={navigateToOverview}>Learn More</Button>
        </Section>
      </AnimatedPageTransition>
    </Page>
  );
};

export default Cover;
```