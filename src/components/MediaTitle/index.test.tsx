import React from 'react';
import { render } from '@testing-library/react';
import MediaTitle, { locationDict } from './index';
import { getPadding } from '../../utils/index';

describe('MediaTitle', () => {
  test('solid bg', () => {
    const { container } = render(
      <MediaTitle title="Doh" solidColor="red" width={100} height={100} />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('background: red;');
  });
  test('gradient bg', () => {
    const gradient = { to: 'pink', from: 'purple', flow: 'to right' } as const;
    const { to, flow, from } = gradient;
    const { container } = render(
      <MediaTitle
        title="Doh"
        asGradient
        gradient={gradient}
        width={100}
        height={100}
      />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(
      `background: linear-gradient(${flow}, ${from}, ${to});`
    );
  });
  test('image bg', () => {
    const url = 'https://placedog.net/500';
    const { container } = render(
      <MediaTitle title="Doh" asImage url={url} width={100} height={100} />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`background-image: url(${url});`);
    expect(container.firstChild).toHaveStyle('background-repeat: no-repeat;');
    expect(container.firstChild).toHaveStyle('background-size: cover;');
    expect(container.firstChild).toHaveStyle('object-fit: cover;');
  });
  test('dangerously set bg', () => {
    const bg = 'someLocallyLoadedFileStub';
    const { container } = render(
      <MediaTitle
        title="Doh"
        bgCovenant={{ overrideAndDangerouslySetBg: bg }}
        width={100}
        height={100}
      />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`background: ${bg};`);
  });
  test('dangerously set gradient', () => {
    const gr = 'radial-gradient(some,shit,here)';
    const { container } = render(
      <MediaTitle
        title="Doh"
        asGradient
        gradient={{ covenant: { overrideAndDangerouslySetGradient: gr } }}
        width={100}
        height={100}
      />
    );
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`background: ${gr};`);
  });
  test('title locations', () => {
    const arr = [
      'top left',
      'top right',
      'bottom left',
      'bottom right'
    ] as const;
    for (const l of arr) {
      const { container } = render(
        <MediaTitle titleLocation={l} title="Doh" width={100} height={100} />
      );
      expect(container.firstChild).not.toBeNull();
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle(
        `justify-content: ${locationDict[l].justifyContent}`
      );
      expect(container.firstChild).toHaveStyle(
        `align-items: ${locationDict[l].alignItems}`
      );
    }
  });
  test('padding', () => {
    const arr = [0, 1, 2, 3, 4] as const;
    for (const n of arr) {
      const { container } = render(
        <MediaTitle padding={n} title="Doh" width={100} height={100} />
      );
      expect(container.firstChild).not.toBeNull();
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle(`padding: ${getPadding(n)};`);
    }
  });
});
