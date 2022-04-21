import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import colors from '../../globals/styles/colors';

/*
 * NOTE:
 * As a general rule of thumb,
 * the default export in a *.stories.tsx file
 * is used to add meta information concerning the component,
 * like props and descriptions for our stories
 */

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle:
      'A general purpose button, see below for available props for this token.'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Sizes = (args: any) => (
  <div>
    <div style={{ padding: 4 }}>
      <Button size="sm" {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size="md" {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size="lg" {...args}>
        Click Me
      </Button>
    </div>
  </div>
);
Sizes.args = {
  backgroundColor: colors.mcwatt.flickrPink
};
Sizes.parameters = {
  docs: {
    storyDescription:
      'There are 6 accepted sizes, ranging from xs - bb respectively. The default size setting is medium or (rg). It is recommended that if you are going to customize the size, you import ButtonSize alongside Button to preserve padding `XS (ButtonSize.xs), Sm (ButtonSize.sm), Med (ButtonSize.rg), Lg (ButtonSize.lg), XL (ButtonSize.xl) Biggest (ButtonSize.bb)`'
  }
};

export const Gradient = Template.bind({});
Gradient.args = {
  asGradient: true,
  gradient: {
    to: 'pink',
    from: 'indigo',
    flow: 'to bottom right'
  },
  size: 'lg'
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundColor: '#A78BFA'
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  color: 'gold'
};

export const OnClick = Template.bind({});
OnClick.args = {
  onClick: () => alert('Clicked the button!')
};
