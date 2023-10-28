```javascript
import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cover from '../pages/Cover';
import Overview from '../pages/Overview';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Values from '../pages/Values';
import Communication from '../pages/Communication';
import Contact from '../pages/Contact';

describe('End-to-End Tests', () => {
  it('Cover page renders without crashing', () => {
    mount(
      <Router>
        <Cover />
      </Router>
    );
  });

  it('Overview page renders without crashing', () => {
    mount(
      <Router>
        <Overview />
      </Router>
    );
  });

  it('Products page renders without crashing', () => {
    mount(
      <Router>
        <Products />
      </Router>
    );
  });

  it('Services page renders without crashing', () => {
    mount(
      <Router>
        <Services />
      </Router>
    );
  });

  it('Values page renders without crashing', () => {
    mount(
      <Router>
        <Values />
      </Router>
    );
  });

  it('Communication page renders without crashing', () => {
    mount(
      <Router>
        <Communication />
      </Router>
    );
  });

  it('Contact page renders without crashing', () => {
    mount(
      <Router>
        <Contact />
      </Router>
    );
  });
});
```