/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { HellerSection } from '../shared/Section';

describe('heller section component', () => {
  test('default', () => {
    const { container } = render(<HellerSection />);
    expect(container.firstChild).toHaveStyle('margin: 0 auto;');
    expect(container.firstChild).toHaveStyle('padding: 1rem;');
    expect(container.firstChild).toHaveStyle('box-sizing: border-box;');
    expect(container.firstChild).toHaveStyle('min-width: 100%;');
    expect(container.firstChild).toHaveStyle('min-height: fit-content;');
    expect(container.firstChild).toHaveStyle('background: inherit;');
    expect(container.firstChild).toHaveStyle('display: flex;');
    expect(container.firstChild).toHaveStyle('flex-direction: column;');
    expect(container.firstChild).toHaveStyle('justify-content: flex-start;');
    expect(container.firstChild).toHaveStyle('align-items: start;');
    expect(container.firstChild).toHaveStyle('overflow-x: hidden;');
    expect(container.firstChild).toHaveStyle('overflow-y: auto;');
    expect(container.firstChild).toHaveStyle('color: white;');
  });
  test('custom color', () => {
    const { container } = render(<HellerSection contentTextColor="red" />);
    expect(container.firstChild).toHaveStyle('color: red;');
  });
  test('custom flex alignment', () => {
    const { container } = render(<HellerSection justifyContent="center" />);
    expect(container.firstChild).toHaveStyle('justify-content: center;');
  });
  test('custom margin & padding', () => {
    const { container } = render(
      <HellerSection margin="1rem" padding="1rem" />
    );
    expect(container.firstChild).toHaveStyle('margin: 1rem;');
    expect(container.firstChild).toHaveStyle('padding: 1rem;');
  });
});
