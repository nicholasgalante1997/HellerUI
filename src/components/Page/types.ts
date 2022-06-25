import { Properties } from 'csstype';
import React, { ComponentType } from 'react';
import { SafeReactFC, WithCustomStyles } from 'src/@types';
import { HellerDividerProps } from '../Divider';

export type HellerPageTheme = 'none' | 'light' | 'dark';

export type NativeHellerSectionProps = {
  id?: string;
  padding?: string | number;
  margin?: string | number;
  justifyContent?: 'center' | 'flex-start';
  contentTextColor?: string;
};

export type HellerSectionProps = SafeReactFC<
  WithCustomStyles<NativeHellerSectionProps>
>;

export type StandardPageProps = SafeReactFC<
  WithCustomStyles<
    Omit<
      BasePage<{
        content: string | string[] | JSX.Element;
      }>,
      'contentEngine'
    >
  >
>;

export type MarkdownPageProps = SafeReactFC<
  WithCustomStyles<
    Omit<
      BasePage<{
        content: string;
        customComponentMap: Record<string, ComponentType>;
      }>,
      'contentEngine'
    >
  >
>;

export type BasePage<T> = T & {
  id?: string;
  className?: string;
  title: string;
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  titleColor?: string;
  subtitleColor?: string;
  subtitleSize?: 'sm' | 'md' | 'lg';
  subtitle?: string;
  withActionBar?: ActionBarProps;
  withDividers?: boolean;
  dividerProps?: HellerDividerProps;
  contentEngine?: 'normal' | 'markdown';
  theme?: HellerPageTheme;
  dangerouslyOverrideInnerContentStyles?: PageStyleCovenant;
} & NativeHellerSectionProps;

type PageStyleCovenant = {
  styles: Pick<
    Properties,
    | 'width'
    | 'minWidth'
    | 'maxWidth'
    | 'height'
    | 'minHeight'
    | 'maxHeight'
    | 'textAlign'
    | 'font'
    | 'alignSelf'
    | 'alignItems'
    | 'alignContent'
    | 'justifyContent'
    | 'justifyItems'
    | 'justifySelf'
  >;
};

export type MarkdownCustomComponentProps = {
  node: Element;
  children: React.ReactNode[];
  [x: string]: any;
};

export type ActionBarProps = {
  actionTitle: JSX.Element | JSX.Element[] | string;
  actionContainer?: JSX.Element[] | JSX.Element;
  titleColor?: string;
};
