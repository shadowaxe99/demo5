```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { Navbar } from '../components/Navbar';
import { AnimatedPageTransition } from '../components/AnimatedPageTransition';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { ClickReveal } from '../components/ClickReveal';
import { Section } from '../components/Section';
import { TextHighlight } from '../components/TextHighlight';
import { pitchDeckData } from '../data/pitchDeckData';
import { usePageTransitions } from '../hooks/usePageTransitions';

const Products = () => {
  const router = useRouter();
  const transitions = usePageTransitions(router);

  return (
    <Page>
      <Navbar />
      <AnimatedPageTransition transitions={transitions}>
        <Section>
          <h1>Products</h1>
          <ScrollAnimation>
            <TextHighlight>{pitchDeckData.products.title}</TextHighlight>
            <p>{pitchDeckData.products.description}</p>
            <ClickReveal content={pitchDeckData.products.details}>
              <h2>Custom-Tailored Digital Butler</h2>
              <p>{pitchDeckData.products.digitalButler}</p>
              <h2>Automation Station</h2>
              <p>{pitchDeckData.products.automationStation}</p>
            </ClickReveal>
          </ScrollAnimation>
        </Section>
      </AnimatedPageTransition>
    </Page>
  );
};

export default Products;
```