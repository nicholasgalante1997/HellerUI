import { HeadingProps } from '../Typography/Heading/types';
import {
  Gradient, SafeReactFC, WithCustomStyles, BgCovenant,
} from '../../@types';

export type NativeMediaTitleProps = {
    title: string;
    titleColor?: string;
    titleLocation?: 'top left' | 'bottom left' | 'top right' | 'bottom right';
    headingCustomProps?: HeadingProps,
    asGradient?: boolean;
    asImage?: boolean;
    url?: string;
    gradient?: Gradient;
    bgCovenant?: BgCovenant;
    solidColor?: string;
    padding?: 0 | 1 | 2 | 3 | 4;
    fullWidth?: boolean;
    width?: string | number;
    height?: string | number;
};

export type MediaTitleProps = SafeReactFC<WithCustomStyles<NativeMediaTitleProps>>;
