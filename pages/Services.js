import React from 'react';
import { useRouter } from 'next/router';
import { usePageTransitions } from '../hooks/usePageTransitions';
import { usePresenterMode } from '../hooks/usePresenterMode';
import Page from '../components/Page';
import Navbar from '../components/Navbar';
import AnimatedPageTransition from '../components/AnimatedPageTransition';
import ScrollAnimation from '../components/ScrollAnimation';
import ClickReveal from '../components/ClickReveal';
import Section from '../components/Section';
import TextHighlight from '../components/TextHighlight';
import pitchDeckData from '../data/pitchDeckData';
import { GlobalStyle } from '../styles/GlobalStyle';

const Services = () => {
  const router = useRouter();
  const { handlePageTransition } = usePageTransitions();
  const { presenterModeEnabled } = usePresenterMode();

  const { services } = pitchDeckData;

  return (
    <Page>
      <GlobalStyle />
      <Navbar onNavigate={handlePageTransition} />
      <AnimatedPageTransition>
        <Section>
          <TextHighlight>{services.title}</TextHighlight>
          <ScrollAnimation>
            <p>{services.description}</p>
            {services.points.map((point, index) => (
              <ClickReveal key={index} content={point} />
            ))}
          </ScrollAnimation>
        </Section>
      </AnimatedPageTransition>
    </Page>
  );
};

export default Services;