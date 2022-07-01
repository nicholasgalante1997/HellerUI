import React from 'react';
import { Story, Meta } from '@storybook/react';
import VarFont from './VarFont';
import { VarFontProps } from './types';

export default {
  title: 'Typography/VarFont',
  component: VarFont,
  parameters: {
    componentSubtitle: 'Omni Font: Its so sick.'
  },
  argTypes: {}
} as Meta;

const Template: Story<VarFontProps> = (args: VarFontProps) => (
  <VarFont {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'hello, is it me youre looking for?',
  fontKey: 'rokkit',
  implementation: 'h2',
  customStyles: {
    color: 'violet'
  }
};
