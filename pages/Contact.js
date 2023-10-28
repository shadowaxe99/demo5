```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { pitchDeckData } from '../data/pitchDeckData';
import { usePageTransitions } from '../hooks/usePageTransitions';

const Contact = () => {
  const router = useRouter();
  const { handleTransition } = usePageTransitions();
  
  const { contact } = pitchDeckData;

  const handleNavigation = (path) => {
    handleTransition(() => {
      router.push(path);
    });
  };

  return (
    <Page>
      <Section>
        <h1>{contact.title}</h1>
        <p>{contact.description}</p>
        <Button onClick={() => handleNavigation(contact.ctaLink)}>
          {contact.ctaText}
        </Button>
      </Section>
    </Page>
  );
};

export default Contact;
```