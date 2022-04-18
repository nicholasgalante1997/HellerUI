/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import BasePage from './Standard/MarkupPage';
import { StandardPageProps } from './types';
import { defaultState as dividerDefState } from './shared/Divider';

export default {
  title: 'PageRenderer/StandardPage',
  component: BasePage,
  decorators: [
    // eslint-disable-next-line no-shadow
    (Story) => (
      <div style={{
        height: '100vh', width: '750px', background: '#000000', margin: '0',
      }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {},
} as Meta;

const mockLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis quam eget risus euismod venenatis. Phasellus ut nisi iaculis arcu placerat gravida sit amet id est. Donec ac nunc quam.  Nam aliquam mi turpis, quis hendrerit diam malesuada eget. Ut ultricies, risus id mattis egestas, quam tellus sodales risus, et fringilla arcu metus eget mi. Cras consectetur scelerisque vehicula. Aenean congue cursus neque quis pharetra. Nulla in ipsum vestibulum, interdum mi in, faucibus purus. Morbi sed velit nulla. Praesent vel varius eros. Quisque vel imperdiet ipsum. Sed vulputate, tortor at laoreet bibendum, diam massa aliquam nisi, euismod dapibus arcu nibh vitae massa. Integer consectetur commodo ex, eu aliquet elit viverra et. Sed ultricies non enim id vestibulum. Phasellus eleifend velit in dolor bibendum, a cursus lorem pretium. Curabitur non diam elementum, mattis neque ac, elementum magna. Proin sagittis sagittis leo nec feugiat. Donec in lacinia metus.\nVivamus finibus nisl nec augue dignissim, eget congue mauris venenatis. Suspendisse sodales, orci ut tincidunt placerat, ipsum ante maximus turpis, sit amet lobortis tellus tortor a purus. Praesent eu pellentesque lorem. Sed sodales mauris sed maximus malesuada. Nam rhoncus posuere nisl. Cras a massa et leo feugiat convallis. Cras ullamcorper, ante eget luctus mollis, nisi ipsum suscipit nulla, ut lobortis odio nulla vel elit. Donec in metus vel lacus tempor rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce interdum tincidunt justo sit amet efficitur. Quisque sapien diam, congue et posuere et, ornare non velit. Integer mollis sodales purus nec malesuada. Donec molestie, tortor in rhoncus posuere, sapien dui finibus sem, a luctus sem eros ac dui. Ut vel elit in tellus venenatis pellentesque. In hac habitasse platea dictumst. Maecenas pharetra interdum consequat. Fusce varius dignissim felis vel congue. Donec bibendum sed mauris eget aliquet. Nulla ultrices facilisis dui vel finibus. Nam lobortis lorem id tellus blandit elementum. Sed urna ex, congue eget leo sit amet, iaculis molestie sapien. Phasellus scelerisque purus magna, sit amet sagittis ligula commodo sed. Suspendisse ultricies neque vitae tortor ornare, ac varius diam euismod. Suspendisse potenti. Ut gravida quam sed libero rutrum hendrerit. Donec ac orci eget augue sollicitudin pretium sit amet sit amet nunc. Sed mollis nunc sed mauris varius interdum. Donec dignissim bibendum velit. Suspendisse ultrices eleifend velit sed laoreet. Duis ligula turpis, feugiat et condimentum at, tincidunt non augue. Maecenas pellentesque felis a tortor malesuada, gravida lobortis urna porta. Nam hendrerit ipsum ac quam eleifend, a pretium nisl volutpat. Pellentesque scelerisque iaculis gravida. Maecenas vel turpis urna. Ut a accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla egestas sollicitudin interdum. Pellentesque ac interdum nunc. Vivamus pretium magna id velit facilisis, et laoreet lacus fermentum. Suspendisse non felis malesuada, consequat ex vel, feugiat nunc. Donec massa tellus, bibendum id eros vitae, congue tristique diam. Curabitur ornare felis eget sodales facilisis.';

const Template: Story<StandardPageProps> = (args: StandardPageProps) => (
  <BasePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'heller ui',
  titleColor: 'white',
  subtitle: 'heller ui is the design system that wants to live',
  withMediaTitle: true,
  gradientMediaTitle: true,
  gradient: {
    flow: 'to bottom right',
    from: 'deeppink',
    to: '#000000',
  },
  withDividers: true,
  dividerProps: {
    fadeColor: '#000000',
    focusColor: dividerDefState.focusColor,
  },
  content: mockLorem,
};
