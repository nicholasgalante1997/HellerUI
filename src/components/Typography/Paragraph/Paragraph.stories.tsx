/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Paragraph from './Paragraph';
import { ParagraphProps } from './types';
import '../../../index.css';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {},
  parameters: {
    componentSubtitle: 'a subsection of Typography for regular paragraph text.',
  },
} as Meta;

const Template: Story<ParagraphProps> = (args) => (
  <Paragraph {...args}>The small yellow fox jumped over the moon.</Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  fontSize: 24,
  color: 'violet',
  bold: false,
  italic: false,
};
