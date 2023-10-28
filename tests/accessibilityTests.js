```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { axe, toHaveNoViolations } from 'jest-axe';

import Cover from '../pages/Cover';
import Overview from '../pages/Overview';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Values from '../pages/Values';
import Communication from '../pages/Communication';
import Contact from '../pages/Contact';

expect.extend(toHaveNoViolations);

describe('Accessibility tests', () => {
  test('Cover page has no accessibility violations', async () => {
    const { container } = render(<Cover />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Overview page has no accessibility violations', async () => {
    const { container } = render(<Overview />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Products page has no accessibility violations', async () => {
    const { container } = render(<Products />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Services page has no accessibility violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Values page has no accessibility violations', async () => {
    const { container } = render(<Values />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Communication page has no accessibility violations', async () => {
    const { container } = render(<Communication />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Contact page has no accessibility violations', async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```