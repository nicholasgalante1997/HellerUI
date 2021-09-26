/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps, ButtonSize, ButtonVariants } from './Button';
import colors from '../../colors';

/*
 * As a general rule of thumb,
 * the default export in a *.stories.tsx file
 * is used to add meta information concerning the component,
 * like props and descriptions for our stories
 */

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'A general purpose button, see below for available props for this token.'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    primary: { control: 'boolean' },
  },
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me</Button>;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

export const Sizes = (args: any) => (
  <div>
    <Button size={ButtonSize.xs} {...args}>Click Me</Button>
    <Button size={ButtonSize.sm} {...args}>Click Me</Button>
    <Button size={ButtonSize.rg} {...args}>Click Me</Button>
    <Button size={ButtonSize.lg} {...args}>Click Me</Button>
    <Button size={ButtonSize.xl} {...args}>Click Me</Button>
    <Button size={ButtonSize.bb} {...args}>Click Me</Button>
  </div>
);
Sizes.args = {
  backgroundColor: '#A78BFA'
};
Sizes.parameters = {
  docs: {
    storyDescription: "There are 6 accepted sizes, ranging from xs - bb respectively. The default size setting is medium or (rg). It is recommended that if you are going to customize the size, you import ButtonSize alongside Button to preserve padding `XS (ButtonSize.xs), Sm (ButtonSize.sm), Med (ButtonSize.rg), Lg (ButtonSize.lg), XL (ButtonSize.xl) Biggest (ButtonSize.bb)`",
  }
};

export const Variants = (args: any) => (
  <div>
    <div>
      <p style={{ color: colors.nately.amethyst, fontFamily: 'Gill Sans, sans-serif'}}>
        Twilight Variant
      </p>
      <Button variant={ButtonVariants.twilight}>Click me</Button>
    </div>
  </div>
);

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundColor: '#A78BFA',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  color: '#1E40AF',
};

export const OnClick = Template.bind({});
OnClick.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked the button!'),
};
