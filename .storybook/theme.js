// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#242038',
  colorSecondary: 'rgba(0,0,0,0.9)',

  // UI
  appBg: '#242038',
  appContentBg: '#242038',
  appBorderColor: '#242038',
  appBorderRadius: 2,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#D1F5FF',
  textInverseColor: '#242038',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'lightblue',
  barBg: '#242038',

  // Form colors
  inputBg: '#242038',
  inputBorder: '242038',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'heller ui',
});