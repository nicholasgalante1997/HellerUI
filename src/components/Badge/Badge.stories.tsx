/**
 * Node Dependencies
*/
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line no-use-before-define */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ChatIcon } from '@heroicons/react/solid';

/**
 * Internal Dependencies
 */
import colors from '../../globals/styles/colors';
import { Badge, BadgeProps } from './Badge';
import { HellerSize } from '../../globals/styles';

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
    <div>
      <Badge size={HellerSize.xs} {...args} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Badge size={HellerSize.sm} {...args}>New!</Badge>
    </div>
    <div style={{ marginTop: 15 }}>
      <Badge size={HellerSize.rg} {...args}>New!</Badge>
    </div>
    <div style={{ marginTop: 25 }}>
      <Badge size={HellerSize.lg} {...args}>
        <ChatIcon width={40} height={40} />
        New!
      </Badge>
    </div>
  </div>
);
Sizes.args = {
  backgroundColor: colors.mcwatt.flickrPink,
};

export const Notification = (args: any) => (
  <div>
    <ChatIcon height={48} width={48} />
    <Badge asNotification {...args} />
  </div>
);
