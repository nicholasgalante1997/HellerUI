/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export const HellerSize = {
  xs: 'extra-small',
  sm: 'small',
  rg: 'regular',
  lg: 'large',
  xl: 'extra-large',
  bb: 'biggest-boy',
} as const;

export type HellerSizeType = typeof HellerSize;
export type HellerSizeKey = keyof HellerSizeType;
export type HellerSizeValue = typeof HellerSize[HellerSizeKey];
