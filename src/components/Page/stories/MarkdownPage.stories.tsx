/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BasePage from '../Markdown/MarkdownPage';
import { MarkdownPageProps } from '../types';
import { defaultState as dividerDefState } from '../../Divider';

export default {
  title: 'Page Renderer/Markdown Page',
  component: BasePage,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div
        style={{
          height: '100vh',
          width: '900px',
          background: '#000000',
          margin: '0'
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {}
} as Meta;

const markdown = `
### heller ui

__a design system that wants to live__

---

### a fantastic origin

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque adipiscing. Fames ac turpis egestas maecenas pharetra convallis posuere. Purus viverra accumsan in nisl nisi scelerisque. Natoque penatibus et magnis dis parturient montes nascetur. Scelerisque fermentum dui faucibus in ornare quam. Dui faucibus in ornare quam viverra orci. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Hac habitasse platea dictumst quisque sagittis. Gravida quis blandit turpis cursus in. Ut diam quam nulla porttitor massa. Dignissim diam quis enim lobortis scelerisque fermentum dui. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Bibendum est ultricies integer quis auctor elit. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Fringilla ut morbi tincidunt augue. Ut lectus arcu bibendum at varius vel pharetra. Congue eu consequat ac felis.

Suscipit tellus mauris a diam maecenas sed enim ut sem. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Pretium lectus quam id leo in vitae turpis massa sed. Turpis tincidunt id aliquet risus feugiat in ante metus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Urna duis convallis convallis tellus id interdum. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Semper auctor neque vitae tempus. Tellus pellentesque eu tincidunt tortor aliquam. Sit amet dictum sit amet justo. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lectus proin nibh nisl condimentum id venenatis. Eget nulla facilisi etiam dignissim diam. Congue nisi vitae suscipit tellus. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Iaculis eu non diam phasellus vestibulum. Eget egestas purus viverra accumsan in. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.

##### a fantastic descent

Nam libero justo laoreet sit. Sed risus pretium quam vulputate dignissim suspendisse. Nunc sed velit dignissim sodales. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Quam id leo in vitae turpis massa sed elementum. At tellus at urna condimentum mattis. Id aliquet risus feugiat in. Velit ut tortor pretium viverra suspendisse potenti. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Fermentum odio eu feugiat pretium. Donec enim diam vulputate ut pharetra sit. Interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu. Sit amet purus gravida quis blandit turpis. Senectus et netus et malesuada fames ac turpis egestas. Sed enim ut sem viverra aliquet eget sit amet tellus.

Rhoncus urna neque viverra justo nec ultrices. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Fames ac turpis egestas maecenas pharetra convallis posuere. Euismod lacinia at quis risus sed vulputate odio. Rhoncus urna neque viverra justo nec ultrices. Faucibus purus in massa tempor. Mi in nulla posuere sollicitudin aliquam ultrices. Augue interdum velit euismod in. Feugiat in ante metus dictum at tempor commodo ullamcorper. Facilisis sed odio morbi quis commodo odio aenean sed. Amet facilisis magna etiam tempor orci eu lobortis.

Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Pellentesque sit amet porttitor eget dolor morbi non arcu. Porta non pulvinar neque laoreet. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Consequat semper viverra nam libero justo laoreet sit amet. Dolor magna eget est lorem ipsum dolor. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Porttitor leo a diam sollicitudin tempor. Lectus sit amet est placerat in egestas erat imperdiet. Egestas fringilla phasellus faucibus scelerisque. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ipsum faucibus vitae aliquet nec ullamcorper. Nisl purus in mollis nunc sed. Amet aliquam id diam maecenas ultricies mi.
`;

const Template: Story<MarkdownPageProps> = (args: MarkdownPageProps) => (
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
    focusColor: dividerDefState.focusColor
  },
  content: markdown,
  dangerouslyOverrideInnerContentStyles: {
    styles: {
      maxWidth: '600px',
      justifySelf: 'center',
      alignSelf: 'center'
    }
  }
};
