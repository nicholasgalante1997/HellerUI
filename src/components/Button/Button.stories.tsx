/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Button, ButtonProps, ButtonSize, ButtonVariants,
} from './Button';
import colors from '../../colors';
import { ShadowStyles } from '../../globals/styles';

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
      'A general purpose button, see below for available props for this token.',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
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
      <Button size={ButtonSize.xs} {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size={ButtonSize.sm} {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size={ButtonSize.rg} {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size={ButtonSize.lg} {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size={ButtonSize.xl} {...args}>
        Click Me
      </Button>
    </div>
    <div style={{ padding: 4 }}>
      <Button size={ButtonSize.bb} {...args}>
        Click Me
      </Button>
    </div>
  </div>
);
Sizes.args = {
  backgroundColor: colors.mcwatt.flickrPink,
};
Sizes.parameters = {
  docs: {
    storyDescription:
      'There are 6 accepted sizes, ranging from xs - bb respectively. The default size setting is medium or (rg). It is recommended that if you are going to customize the size, you import ButtonSize alongside Button to preserve padding `XS (ButtonSize.xs), Sm (ButtonSize.sm), Med (ButtonSize.rg), Lg (ButtonSize.lg), XL (ButtonSize.xl) Biggest (ButtonSize.bb)`',
  },
};

export const Variants = (args: any) => (
  <div>
    <div>
      <p
        style={{
          color: colors.nately.amethyst,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Twilight Variant
      </p>
      <Button {...args} variant={ButtonVariants.twilight}>Click me</Button>
    </div>
    <div>
      <p
        style={{
          color: colors.nately.amethyst,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Twilight Gradient Variant
      </p>
      <Button {...args} variant={ButtonVariants.twilightGradient}>Click me</Button>
    </div>
    <div>
      <p
        style={{
          color: colors.dunbar.amaranthPurple,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Rose Garden Variant
      </p>
      <Button {...args} variant={ButtonVariants.roseGarden}>Click me</Button>
    </div>
    <div>
      <p
        style={{
          color: colors.dunbar.amaranthPurple,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Rose Garden Gradient Variant
      </p>
      <Button {...args} variant={ButtonVariants.roseGardenGradient}>Click me</Button>
    </div>
    <div>
      <p
        style={{
          color: colors.dunbar.flourescentBlue,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Skyline Variant
      </p>
      <Button {...args} variant={ButtonVariants.skyline}>Click me</Button>
    </div>
    <div>
      <p
        style={{
          color: colors.dunbar.flourescentBlue,
          fontFamily: 'Gill Sans, sans-serif',
        }}
      >
        Skyline Variant
      </p>
      <Button {...args} ariant={ButtonVariants.skylineGradient}>Click me</Button>
    </div>
  </div>
);
Variants.parameters = {
  docs: {
    storyDescription:
      'The below variants will work out of the box with the HellerUI component library components. Note, that while most variants will work with the invert prop, variants that are gradients will by default prevent color inversion.',
  },
};

export const Invert = Template.bind({});
Invert.args = {
  invert: true,
  variant: ButtonVariants.roseGarden,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: ShadowStyles.sharp,
};

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
