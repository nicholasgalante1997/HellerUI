/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta } from '@storybook/react';
import MDPage from '../Markdown/MarkdownPage';
import { defaultState as dividerDefState } from '../../Divider';

const mockLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis quam eget risus euismod venenatis. Phasellus ut nisi iaculis arcu placerat gravida sit amet id est. Donec ac nunc quam.  Nam aliquam mi turpis, quis hendrerit diam malesuada eget. Ut ultricies, risus id mattis egestas, quam tellus sodales risus, et fringilla arcu metus eget mi. Cras consectetur scelerisque vehicula. Aenean congue cursus neque quis pharetra. Nulla in ipsum vestibulum, interdum mi in, faucibus purus. Morbi sed velit nulla. Praesent vel varius eros. Quisque vel imperdiet ipsum. Sed vulputate, tortor at laoreet bibendum, diam massa aliquam nisi, euismod dapibus arcu nibh vitae massa.';

export default {
  title: 'Page Renderer/OOB Page Themes',
  component: MDPage
} as Meta;

const markdown = `
##### 1. a fantastic origin

${mockLorem}


${mockLorem}


~~strikethrough i think so~~

**not to mention bold**

_and italic_


> a blockquote for those that indulge


* checklists  
* [x] yes  
* [ ] no  
`;

export const MDDark = () => (
  <div
    style={{
      height: '100vh',
      width: '900px',
      background: '#000000',
      margin: '0'
    }}
  >
    <MDPage
      title="heller ui"
      subtitle="heller ui is the design system that wants to live"
      theme="dark"
      withDividers
      dividerProps={{
        fadeColor: '#000000',
        focusColor: dividerDefState.focusColor
      }}
      content={markdown}
    />
  </div>
);

export const MDLte = () => (
  <div
    style={{
      height: '100vh',
      width: '900px',
      background: '#ffffff',
      margin: '0'
    }}
  >
    <MDPage
      title="heller ui"
      subtitle="heller ui is the design system that wants to live"
      theme="light"
      withDividers
      dividerProps={{
        fadeColor: '#ffffff',
        focusColor: dividerDefState.focusColor
      }}
      content={markdown}
    />
  </div>
);
