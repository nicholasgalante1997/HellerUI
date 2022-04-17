/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BasePage from './Standard/MarkupPage';
import { StandardPageProps } from './types';

export default {
  title: 'PageRenderer/StandardPage',
  component: BasePage,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div style={{
        height: '100vh', width: '750px', background: 'rgba(0,0,0,0.85)', margin: '0',
      }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {},
} as Meta;

const Template: Story<StandardPageProps> = (args: StandardPageProps) => (
  <BasePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withMediaTitle: true,
  gradientMediaTitle: true,
  gradient: {
    flow: 'to bottom right',
    from: 'deeppink',
    to: 'rgba(0,0,0,0.85)',
  },
};
