/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Gradient, SafeReactFC, WithCustomStyles } from 'src/@types';
import { NativeHellerSectionProps, HellerDividerProps } from './shared/types';

export type StandardPageProps = SafeReactFC<WithCustomStyles<BasePage<{}>>>;

interface PageType {}

export type BasePage<T extends PageType> = T & {
    id?: string;
    className?: string;
    withMediaTitle?: boolean;
    imageMediaTitle?: boolean;
    imageUrl?: string;
    gradientMediaTitle?: boolean;
    gradient?: Gradient;
    title: string;
    titleColor?: string;
    subtitleColor?: string;
    subtitleSize?: 'sm' | 'md' | 'lg';
    subtitle?: string;
    withActionBar?: ActionBarProps;
    withDividers?: boolean;
    dividerProps?: HellerDividerProps;
    content: string | string[] | string[][] | JSX.Element;
} &
NativeHellerSectionProps;

export type ActionBarProps = {
    actionTitle: JSX.Element | JSX.Element[] | string;
    actionContainer?: JSX.Element[] | JSX.Element;
    titleColor?: string;
};
