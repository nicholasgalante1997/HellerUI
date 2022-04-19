import React from 'react';
import { Meta, Story } from '@storybook/react';
import MediaTitle from './index';
import type { MediaTitleProps } from './types';

export default {
  title: 'MediaTitle',
  component: MediaTitle,
  argTypes: {},
  parameters: {},
  decorators: []
} as Meta;

const Template: Story<MediaTitleProps> = (args) => <MediaTitle {...args} />;

export const Image = Template.bind({});
Image.args = {
  asImage: true,
  url: 'https://i.pinimg.com/originals/7f/b7/04/7fb7045f8669dd212e7c228627550d31.jpg',
  title: "D'oh!",
  fullWidth: true,
  height: '300px',
  titleColor: 'black',
  titleLocation: 'bottom left',
  padding: 2,
  width: '500px'
};

export const Gradient = Template.bind({});
Gradient.args = {
  title: 'Splash',
  fullWidth: true,
  height: '300px',
  titleColor: 'black',
  titleLocation: 'bottom left',
  padding: 2,
  width: '500px',
  asGradient: true,
  gradient: {
    from: 'lightblue',
    to: 'yellow',
    flow: 'to bottom right'
  }
};

export const Solid = Template.bind({});
Solid.args = {
  title: 'Joseph Yossarian',
  fullWidth: true,
  height: '300px',
  titleColor: 'lightblue',
  titleLocation: 'top left',
  padding: 2,
  solidColor: 'rgba(0,0,0,0.88)'
};
