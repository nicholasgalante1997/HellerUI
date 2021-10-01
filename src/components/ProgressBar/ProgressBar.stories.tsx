/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import colors from '../../colors';

export default {
  title: 'Progress Bar',
  component: ProgressBar,
  parameters: {
    componentSubtitle:
      'HTML 5 Progress Bar',
  },
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
