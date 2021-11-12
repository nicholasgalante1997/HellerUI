/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps, HeadingSizes } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    componentSubtitle: 'A typography subset for section titles, page headings, etc.',
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => (<Heading {...args}>Heller UI</Heading>);

export const Default = Template.bind({});
Default.args = {};

export const Sizes = (args: any) => (
  <div style={{ padding: 8 }}>
    <Heading asHeading={HeadingSizes.H1} {...args}>Heller UI</Heading>
    <Heading asHeading={HeadingSizes.H2} {...args}>Heller UI</Heading>
  </div>
);
