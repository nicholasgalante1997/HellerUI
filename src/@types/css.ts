import { Properties } from 'csstype';

export type WithCustomStyles<T> = T & {
  customStyles?: Properties;
};

export type Gradient = {
  to?: string;
  from?: string;
  flow?:
    | 'to right'
    | 'to bottom right'
    | 'to top right'
    | 'to left'
    | 'to top left'
    | 'to top right';
  covenant?: GradientCovenant;
};

export type GradientCovenant = {
  overrideAndDangerouslySetGradient: string;
};

export type BgCovenant = {
  overrideAndDangerouslySetBg: string;
};
