/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BasePage from '../Markdown/MarkdownPage';
import { MarkdownPageProps } from '../types';
import { defaultState as dividerDefState } from '../../Divider';

export default {
  title: 'Page Renderer/Markdown Page',
  component: BasePage,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div
        style={{
          height: '100vh',
          width: '900px',
          background: '#000000',
          margin: '0'
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {}
} as Meta;

const markdown = `
### heller ui

__a design system that wants to live__

---

##### 1. a fantastic origin

a paragraph

~~strikethrough i think so~~

**not to mention bold**

_and italic_

> a blockquote for those that indulge

* checklists  
* [x] yes  
* [ ] no  
`;

const Template: Story<MarkdownPageProps> = (args: MarkdownPageProps) => (
  <BasePage {...args} />
);

export const ContentAsString = Template.bind({});
ContentAsString.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor
  },
  content: markdown,
  dangerouslyOverrideInnerContentStyles: {
    styles: {
      maxWidth: '600px',
      justifySelf: 'center',
      alignSelf: 'center'
    }
  }
};
