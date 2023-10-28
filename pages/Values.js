```javascript
import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '../components/Page';
import { Section } from '../components/Section';
import { TextHighlight } from '../components/TextHighlight';
import { pitchDeckData } from '../data/pitchDeckData';
import { usePageTransitions } from '../hooks/usePageTransitions';

const Values = () => {
  const router = useRouter();
  const { handleTransition } = usePageTransitions(router);

  return (
    <Page onTransition={handleTransition}>
      <Section>
        <h1><TextHighlight>{pitchDeckData.values.title}</TextHighlight></h1>
        <p>{pitchDeckData.values.description}</p>
        <ul>
          {pitchDeckData.values.list.map((value, index) => (
            <li key={index}>
              <TextHighlight>{value}</TextHighlight>
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
};

export default Values;
```