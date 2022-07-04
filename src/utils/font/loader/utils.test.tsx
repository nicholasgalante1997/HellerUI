import React from 'react';
import { render } from '@testing-library/react';
import {
  checkDOMTreeForLinkEl,
  createLinkElement,
  destroyLinkElement,
  transform,
  isValidHttpUrl
} from './utils';

describe('hook util suite', () => {
  test('isValidHttpUrl - true', () => {
    const stubHref = 'http://mocksite.com/css?family=stub:400,500,600'
    expect(isValidHttpUrl(stubHref)).toBeTruthy();
  })
  test('isValidHttpUrl - true', () => {
    const stubHref = 'https://mocksite.com/css?family=stub:400,500,600'
    expect(isValidHttpUrl(stubHref)).toBeTruthy();
  })
  test('isValidHttpUrl - false', () => {
    const stubHref = 'wackurl'
    expect(isValidHttpUrl(stubHref)).toBeFalsy();
  })
  test('transform is able to take a \'family\' from a valid gfont url', () => {
    const urlPreHash = 'https://mock-font.com/css?family=test:500'
    const hash = transform(urlPreHash);
    let matcher = '';
    for (const l of 'test') {
      matcher += String.fromCharCode(l.charCodeAt(0) + 2);
    }
    expect(hash.length).toBe(4);
    expect(hash).not.toBe('test');
    expect(hash).toBe(matcher);
  });
  test('transform is able to take a \'family\' from second argument familyKey', () => {
    const urlPreHash = 'https://mock-font.com/css?family=test:500'
    const hash = transform(urlPreHash, 'otherfamily');
    let matcher = '';
    for (const l of 'otherfamily') {
      matcher += String.fromCharCode(l.charCodeAt(0) + 2);
    }
    expect(hash.length).toBe(11);
    expect(hash).toBe(matcher);
  });
  test('transform throws an error if family cant be discerned and isnt supplied', () => {
    const urlPreHash = 'https://mock-font.com/css?other=test:500'
    expect(() => { transform(urlPreHash) }).toThrow();
    expect(() => { transform(urlPreHash) }).toThrowError('MISSING FONT FAMILY');
  });
  test('createLinkElement - string', () => {
    const stubHref = 'http://mocksite.com/css?family=stub:400,500,600'
    const linkEl = createLinkElement(stubHref);

    expect(linkEl).toHaveAttribute('href', stubHref);
    expect(linkEl).toHaveAttribute('rel', 'stylesheet');
    expect(linkEl).toHaveAttribute(
      'data-fonturlhashed',
      transform(stubHref)
    );
  });
  test('checkDOMTreeForLinkEl - string - true', () => {
    const stubHref = 'http://mocksite.com/css?family=stub:400,500,600'
    render(
      <html>
        <link
          rel="stylesheet"
          href={stubHref}
          data-fonturlhashed={transform(stubHref)}
        ></link>
      </html>
    );

    expect(checkDOMTreeForLinkEl(stubHref)).toBeTruthy();
  });
  test('checkDOMTreeForLinkEl - string - false', () => {
    const stubHref = 'http://mocksite.com/css?family=stub2:400,500,600'
    render(
      <html>
        <link
          rel="stylesheet"
          href={stubHref}
          data-fonturlhashed={transform(stubHref)}
        ></link>
      </html>
    );

    expect(checkDOMTreeForLinkEl('http://someothersite.com/css?family=notstub:300')).toBeFalsy();
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
