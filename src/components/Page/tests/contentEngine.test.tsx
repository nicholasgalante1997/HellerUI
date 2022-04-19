/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { contentEngine } from '../utils';

describe('content engine', () => {
  test('string argument', () => {
    const content = contentEngine('Some content', '#000000');
    const Wrapper = () => <>{content}</>;
    const { container, unmount } = render(<Wrapper />);
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('color: #000000;');
    expect(container.firstChild).toHaveStyle('font-size: 16px;');
    expect(container.firstChild).toHaveStyle("font-family: 'Poppins Regular';");
    unmount();
  });
  test('string[] argument', () => {
    const content = contentEngine(
      ['Some content', 'Some more content'],
      '#000000'
    );
    const Wrapper = () => <>{content}</>;
    render(<Wrapper />);

    const blockA = screen.getByText('Some content');

    expect(blockA).not.toBeNull();
    expect(blockA).toBeInTheDocument();
    expect(blockA).toHaveStyle('color: #000000;');
    expect(blockA).toHaveStyle('font-size: 16px;');
    expect(blockA).toHaveStyle("font-family: 'Poppins Regular';");

    const blockB = screen.getByText('Some more content');

    expect(blockB).not.toBeNull();
    expect(blockB).toBeInTheDocument();
    expect(blockB).toHaveStyle('color: #000000;');
    expect(blockB).toHaveStyle('font-size: 16px;');
    expect(blockB).toHaveStyle("font-family: 'Poppins Regular';");
  });
  test('jsx argument', () => {
    const content = contentEngine(
      <p data-testid="custom-jsx">hellerui</p>,
      '#000000'
    );
    const Wrapper = () => <>{content}</>;
    const { queryByTestId } = render(<Wrapper />);
    const el = queryByTestId('custom-jsx');
    expect(el).not.toBeNull();
    expect(el).toBeInTheDocument();
  });
});
