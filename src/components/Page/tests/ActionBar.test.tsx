/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import ActionBar from '../shared/ActionBar';

describe('Action Bar Component', () => {
  test('ActionBar Default', () => {
    const { queryByTestId } = render(
      <ActionBar actionTitle="heller test" titleColor="pink" />
    );
    const el = queryByTestId('action-bar-title');
    expect(el).not.toBeNull();
    expect(el).toBeInTheDocument();
    expect(el).toHaveStyle("font-family: 'Poppins Thin';");
    expect(el).toHaveStyle('font-size: 16px;');
    expect(el).toHaveStyle('color: pink;');
  });
  test('ActionBar Custom Title Component', () => {
    const { queryByTestId } = render(
      <ActionBar actionTitle={<h1 data-testid="custom-jsx">custom</h1>} />
    );
    const el = queryByTestId('custom-jsx');
    expect(el).not.toBeNull();
    expect(el).toBeInTheDocument();
  });
  test('ActionBar actionContainer', () => {
    const { queryByTestId, container } = render(
      <ActionBar
        actionTitle="heller test"
        titleColor="pink"
        actionContainer={
          <button type="button" data-testid="mock-btn">
            click
          </button>
        }
      />
    );
    expect(container.firstChild).toHaveStyle('display: flex;');
    expect(container.firstChild).toHaveStyle('justify-content: space-between');

    const el = queryByTestId('mock-btn');
    expect(el).not.toBeNull();
    expect(el).toBeInTheDocument();
  });
});
