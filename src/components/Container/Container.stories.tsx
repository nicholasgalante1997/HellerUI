/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from './index';
import { ContainerProps } from './types';
import '../../index.css';
import { Heading } from '../Typography';

export default {
  title: 'Container',
  component: Container,
  argTypes: {},
  parameters: {
    componentSubtitle: 'general usage container/grid component',
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args}>{args.children}</Container>;

export const Default = Template.bind({});
Default.args = {
  asGridChild: false,
  asGridParent: false,
  background: 'purple',
  children: (<Heading color="white" customStyles={{ fontSize: '1rem' }}>Container</Heading> as any),
  className: 'sb-container',
  id: 'sb-container-id',
  gradient: undefined,
  width: 200,
  height: 100,
  radius: 'normal',
  image: undefined,
  margin: undefined,
  padding: undefined,
  opacity: undefined,
  customStyles: {
    alignContent: 'center',
    justifyContent: 'center',
  },
};

export const Gradient = Template.bind({});
Gradient.args = {
  asGridChild: false,
  asGridParent: false,
  background: undefined,
  children: (<Heading color="white" customStyles={{ fontSize: '1rem' }}>Container</Heading> as any),
  className: 'sb-container',
  id: 'sb-container-id',
  gradient: {
    from: 'pink',
    to: 'purple',
    flow: 'to bottom left',
  },
  width: 200,
  height: 100,
  radius: 'normal',
  image: undefined,
  margin: undefined,
  padding: undefined,
  opacity: undefined,
  customStyles: {
    alignContent: 'center',
    justifyContent: 'center',
  },
};

export const Image = Template.bind({});
Image.args = {
  asGridChild: false,
  asGridParent: false,
  className: 'sb-container',
  id: 'sb-container-id',
  gradient: undefined,
  width: 200,
  height: 100,
  radius: 'normal',
  image: 'https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=9cec154627571f9d1d2bd69dff8a26c1',
  margin: undefined,
  padding: undefined,
  opacity: undefined,
  customStyles: {
    alignContent: 'center',
    justifyContent: 'center',
  },
};

export const Grid = () => (
  <Container asGridParent>
    <Container height={100} asGridChild colSpan={4} background="purple" />
    <Container height={100} asGridChild colSpan={8} background="pink" />
  </Container>
);
