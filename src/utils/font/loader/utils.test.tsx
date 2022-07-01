import React from 'react';
import { render } from '@testing-library/react';
import {
  checkDOMTreeForLinkEl,
  createLinkElement,
  destroyLinkElement,
  transform
} from './utils';

describe('hook util suite', () => {
  test('createLinkElement - string', () => {
    const linkEl = createLinkElement('#mock-url');

    expect(linkEl).toHaveAttribute('href', '#mock-url');
    expect(linkEl).toHaveAttribute('rel', 'stylesheet');
    expect(linkEl).toHaveAttribute(
      'data-fonturlhashed',
      transform('#mock-url')
    );
  });
  test('checkDOMTreeForLinkEl - string - true', () => {
    render(
      <html>
        <link
          rel="stylesheet"
          href="#link"
          data-fonturlhashed={transform('#link')}
        ></link>
      </html>
    );

    expect(checkDOMTreeForLinkEl('#link')).toBeTruthy();
  });
  test('checkDOMTreeForLinkEl - string - false', () => {
    render(
      <html>
        <link
          rel="stylesheet"
          href="#link2"
          data-fonturlhashed={transform('#link2')}
        ></link>
      </html>
    );

    expect(checkDOMTreeForLinkEl('#link')).toBeFalsy();
  });
  test('destroyLinkElement', () => {
    const { queryByTestId } = render(
      <head>
        <link data-testid="stub"></link>
      </head>
    );
    let link = queryByTestId('stub');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();

    destroyLinkElement(link!);

    link = queryByTestId('stub');

    expect(link).toBeNull();
    expect(link).not.toBeInTheDocument();
  });
});
