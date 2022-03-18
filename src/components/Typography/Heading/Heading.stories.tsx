/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading from './Heading';
import { HeadingProps } from './types';
import '../../../index.css';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
  parameters: {
    componentSubtitle: 'a subsection of Typography for title displays.',
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>Seymour Skinner</Heading>;

export const Default = Template.bind({});
Default.args = {
  as: 'h2',
  color: 'violet',
};
