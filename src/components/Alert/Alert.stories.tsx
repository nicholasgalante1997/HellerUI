import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert } from './Alert';
import { AlertProps } from './types';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {},
  parameters: {}
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'info',
  title: `Here is our placeholder text for the Alert Bar. You've been alerted. Here's some extra text so that we can see if we're always ellipses-ing or not ?!?`,
  isVisible: true
};
