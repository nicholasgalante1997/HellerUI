import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Loader } from './index';
import { LoaderProps } from './types';

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    componentSubtitle: 'A simple loader component'
  },
  argTypes: {}
} as Meta;

const Template: Story<LoaderProps> = (args: LoaderProps) => (
  <Loader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fillColor: 'gray',
  spinRate: 0.5,
  height: '24px',
  width: '24px'
};
