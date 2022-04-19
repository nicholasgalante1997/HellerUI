/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import PageHeading from '../shared/PageHeading';

describe('Page Heading Component', () => {
  test('PageHeading Default', () => {
    const { container, queryAllByText, queryByTestId } = render(
      <PageHeading
        subtitleColor="red"
        titleColor="black"
        title="heller ui"
        subtitle="test subtitle"
        withDividers
        dividerProps={{ fadeColor: 'yellow', focusColor: 'pink' }}
      />
    );

    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();

    const h = queryAllByText('heller ui');
    const sub = queryAllByText('test subtitle');

    expect(sub[0]).toHaveStyle("font-family: 'Poppins Thin';");
    expect(sub[0]).toHaveStyle('font-size: 32px;');
    expect(sub[0]).toHaveStyle('color: red;');

    expect(h[0]).toHaveStyle("font-family: 'Poppins Bold';");
    expect(h[0]).toHaveStyle('color: black;');

    // rogue element capture
    const breakEl = queryByTestId('br');
    expect(breakEl).not.toBeNull();

    const dividerEl = queryByTestId('hr');
    expect(dividerEl).not.toBeNull();
  });
  test('PageHeading ActionBar', () => {
    const { queryByTestId } = render(
      <PageHeading
        subtitleColor="red"
        title="heller ui"
        subtitle="test subtitle"
        withActionBar={{
          actionTitle: <h1 data-testid="ph-action-bar">mock</h1>
        }}
        withDividers
        dividerProps={{ fadeColor: 'yellow', focusColor: 'pink' }}
      />
    );

    const el = queryByTestId('ph-action-bar');
    expect(el).not.toBeNull();
    expect(el).toBeInTheDocument();
  });
  test('title as states', () => {
    const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
    for (const s of sizes) {
      const { unmount } = render(<PageHeading title="mock" titleSize={s} />);
      const heading = document.querySelector(s);
      expect(heading).not.toBeNull();
      expect(heading).toBeInTheDocument();
      unmount();
    }
  });
  test('PageHeading no subtitle', () => {
    render(
      <PageHeading
        title="heller ui"
        withDividers
        dividerProps={{ fadeColor: 'yellow', focusColor: 'pink' }}
      />
    );
    const arr = Array.from(document.querySelectorAll('p'));
    expect(arr.length).toBe(0);
  });
  test('PageHeading no hrs', () => {
    render(<PageHeading title="heller ui" />);
    const arr = Array.from(document.querySelectorAll('hr'));
    expect(arr.length).toBe(0);
  });
});
