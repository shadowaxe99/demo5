```javascript
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Cover from '../pages/Cover';
import Overview from '../pages/Overview';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Values from '../pages/Values';
import Communication from '../pages/Communication';
import Contact from '../pages/Contact';

import Navbar from '../components/Navbar';
import AnimatedPageTransition from '../components/AnimatedPageTransition';
import ScrollAnimation from '../components/ScrollAnimation';
import ClickReveal from '../components/ClickReveal';
import PresenterMode from '../components/PresenterMode';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Illustration from '../components/Illustration';
import Section from '../components/Section';
import TextHighlight from '../components/TextHighlight';

afterEach(cleanup);

describe('Elysium Innovations Pitch Deck', () => {
  it('renders Cover page without crashing', () => {
    render(<Cover />);
  });

  it('renders Overview page without crashing', () => {
    render(<Overview />);
  });

  it('renders Products page without crashing', () => {
    render(<Products />);
  });

  it('renders Services page without crashing', () => {
    render(<Services />);
  });

  it('renders Values page without crashing', () => {
    render(<Values />);
  });

  it('renders Communication page without crashing', () => {
    render(<Communication />);
  });

  it('renders Contact page without crashing', () => {
    render(<Contact />);
  });

  it('renders Navbar component without crashing', () => {
    render(<Navbar />);
  });

  it('renders AnimatedPageTransition component without crashing', () => {
    render(<AnimatedPageTransition />);
  });

  it('renders ScrollAnimation component without crashing', () => {
    render(<ScrollAnimation />);
  });

  it('renders ClickReveal component without crashing', () => {
    render(<ClickReveal />);
  });

  it('renders PresenterMode component without crashing', () => {
    render(<PresenterMode />);
  });

  it('renders Button component without crashing', () => {
    render(<Button />);
  });

  it('renders Icon component without crashing', () => {
    render(<Icon />);
  });

  it('renders Illustration component without crashing', () => {
    render(<Illustration />);
  });

  it('renders Section component without crashing', () => {
    render(<Section />);
  });

  it('renders TextHighlight component without crashing', () => {
    render(<TextHighlight />);
  });
});
```