import React from 'react';
import renderer from 'react-test-renderer';
import Cover from '../pages/Cover';
import Overview from '../pages/Overview';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Values from '../pages/Values';
import Communication from '../pages/Communication';
import Contact from '../pages/Contact';

describe('Snapshot Testing', () => {
  it('Cover page renders correctly', () => {
    const tree = renderer.create(<Cover />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Overview page renders correctly', () => {
    const tree = renderer.create(<Overview />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Products page renders correctly', () => {
    const tree = renderer.create(<Products />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Services page renders correctly', () => {
    const tree = renderer.create(<Services />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Values page renders correctly', () => {
    const tree = renderer.create(<Values />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Communication page renders correctly', () => {
    const tree = renderer.create(<Communication />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contact page renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});