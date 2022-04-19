/* eslint-disable no-undef */
import React, { ComponentType } from 'react';
import StandardPage from './Standard/MarkupPage';
import MarkdownPage from './Markdown/MarkdownPage';
import { BasePage } from './types';

export const defaultColor = 'rgba(270,270,270,0.8)';
export const hellerThemeOptions = {
  light: {
    mainFill: 'rgba(0,0,0)',
    supportFill: 'rgba(0,0,0,0.6)'
  },
  dark: {
    mainFill: 'rgba(270,270,270)',
    supportFill: 'rgba(270,270,270,0.8)'
  }
} as const;

const Page = (
  props: BasePage<{
    content: string | string[] | JSX.Element;
    customComponentMap?: Record<string, ComponentType>;
  }>
) => {
  const {
    contentEngine = 'normal',
    content,
    customComponentMap = {},
    ...rest
  } = props;
  if (contentEngine === 'markdown')
    return (
      <MarkdownPage
        {...rest}
        content={content as string}
        customComponentMap={customComponentMap}
      />
    );
  return <StandardPage {...rest} content={content} />;
};

export { Page };
export * from './types';
