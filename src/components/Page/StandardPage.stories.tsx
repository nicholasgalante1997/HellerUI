/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BasePage from './Standard/MarkupPage';
import { StandardPageProps } from './types';
import { defaultState as dividerDefState } from '../Divider/Divider';
import { Heading, Paragraph } from '../Typography';
import { Button } from '../Button';
import colors from '../../globals/styles/colors';

export default {
  title: 'Page Renderer/Standard Page',
  component: BasePage,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div style={{
        height: '100vh', width: '900px', background: '#000000', margin: '0',
      }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {},
} as Meta;

const mockLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis quam eget risus euismod venenatis. Phasellus ut nisi iaculis arcu placerat gravida sit amet id est. Donec ac nunc quam.  Nam aliquam mi turpis, quis hendrerit diam malesuada eget. Ut ultricies, risus id mattis egestas, quam tellus sodales risus, et fringilla arcu metus eget mi. Cras consectetur scelerisque vehicula. Aenean congue cursus neque quis pharetra. Nulla in ipsum vestibulum, interdum mi in, faucibus purus. Morbi sed velit nulla. Praesent vel varius eros. Quisque vel imperdiet ipsum. Sed vulputate, tortor at laoreet bibendum, diam massa aliquam nisi, euismod dapibus arcu nibh vitae massa.';
const mockParagraphs = [mockLorem, mockLorem];

const Template: Story<StandardPageProps> = (args: StandardPageProps) => (
  <BasePage {...args} />
);

export const ContentAsString = Template.bind({});
ContentAsString.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor,
  },
  content: mockLorem,
};

export const ContentAsStringArray = Template.bind({});
ContentAsStringArray.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor,
  },
  content: mockParagraphs,
};


export const ContentAsJSX = Template.bind({});
ContentAsJSX.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor,
  },
  content: (
    <>
      <Heading color='red' as='h4'>
        Title 1
      </Heading>
      <Paragraph color="pink" fontSize={16}>
        {mockLorem}
      </Paragraph>
      <Heading color='red' as='h5'>
        Title 2
      </Heading>
      <Paragraph color="pink" fontSize={16}>
        {mockLorem}
      </Paragraph>
      <Paragraph color="pink" fontSize={16}>
        {mockLorem}
      </Paragraph>
    </>
  ),
};

export const ActionBar = Template.bind({});
ActionBar.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withActionBar: {
    actionTitle: 'heller ui design systems',
    titleColor: 'white',
    actionContainer: (
      <>
        <Paragraph customStyles={{marginRight: '0.25rem'}} bold color='white' fontSize={14}>Docs</Paragraph>
        <Button backgroundColor={colors.mcwatt.flickrPink}>Learn More</Button>
      </>
    )
  },
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor,
  },
  content: mockParagraphs,
};
