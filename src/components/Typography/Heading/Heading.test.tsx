/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

const headingStates = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
const headingScales = [100, 200, 300, 400, 500, 600, 700, 800] as const;

describe('Heading', () => {
  test('h1 - h6 snapshots', () => {
    for (const hState of headingStates) {
      const { container } = render(<Heading as={hState}>Heller UI</Heading>);
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle("font-family: 'Poppins Bold';");
      expect(container.firstChild).toMatchSnapshot();
    }
  });
  test('dynamic color', () => {
    const { container } = render(
      <Heading as="h3" color="deeppink">
        Heller UI
      </Heading>
    );
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('color: deeppink;');
    expect(container.firstChild).toMatchSnapshot();
  });
  test('font weight', () => {
    for (const scale of headingScales) {
      const { container } = render(
        <Heading as="h3" scale={scale}>
          Heller UI
        </Heading>
      );
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle(`font-weight: ${scale};`);
      expect(container.firstChild).toMatchSnapshot();
    }
  });
});
