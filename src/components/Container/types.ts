import React from 'react';
import {
  SafeReactFC, WithCustomStyles, Gradient,
} from '../../@types';

export type NativeContainerProps = {
    radius?: 'rounded' | 'normal' | 'none';
    background?: string;
    gradient?: Gradient;
    width?: string | number;
    height?: string | number;
    opacity?: number;
    padding?: string;
    margin?: string;
    image?: string;
    asGridParent?: boolean;
    asGridChild?: boolean;
    colSpan?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
} & Partial<Pick<HTMLDivElement,
    'id' |
    'className' |
    'ariaLabel'
>>

export type ContainerProps =
    SafeReactFC<WithCustomStyles<NativeContainerProps>>;
