/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Badge, BadgeProps, BadgeSize } from './Badge';
import colors from '../../colors';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    componentSubtitle:
      'A badge for tagging content, see below for available props for this token.',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args}>New!</Badge>;

export const Default = Template.bind({});
Default.args = {};

export const Sizes = (args: any) => (
  <div>
    <div style={{ marginTop: 10 }}>
      <Badge size={BadgeSize.xs} {...args}>New!</Badge>
    </div>
    <div style={{ marginTop: 10 }}>
      <Badge size={BadgeSize.sm} {...args}>New!</Badge>
    </div>
    <div style={{ marginTop: 20 }}>
      <Badge size={BadgeSize.rg} {...args}>New!</Badge>
    </div>
  </div>
);
Sizes.args = {};
