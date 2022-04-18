/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component, ComponentType } from 'react';
import { SafeReactFC, WithCustomStyles } from 'src/@types';
import { NativeHellerSectionProps } from './shared/types';
import { HellerDividerProps } from '../Divider'

export type PageProps = {};

export type StandardPageProps = 
SafeReactFC<
    WithCustomStyles<
        Omit<
            BasePage<{
                content: string | string[] | JSX.Element;
            }>, 
            'contentEngine'
        >
    >
>;

export type MarkdownPageProps = 
SafeReactFC<
    WithCustomStyles<
        Omit<
            BasePage<{
                content: string;
                customComponentMap: Record<string, ComponentType>
            }>, 
            'contentEngine'
        >
    >
>;

export type BasePage<T> = T & {
    id?: string;
    className?: string;
    title: string;
    titleColor?: string;
    subtitleColor?: string;
    subtitleSize?: 'sm' | 'md' | 'lg';
    subtitle?: string;
    withActionBar?: ActionBarProps;
    withDividers?: boolean;
    dividerProps?: HellerDividerProps;
    contentEngine?: 'normal' | 'markdown' | 'mdx';
} &
NativeHellerSectionProps;

export type MarkdownCustomComponentProps = { 
    node: Element;
    children: React.ReactNode[]; 
    [x: string]: any;
}

export type ActionBarProps = {
    actionTitle: JSX.Element | JSX.Element[] | string;
    actionContainer?: JSX.Element[] | JSX.Element;
    titleColor?: string;
};
