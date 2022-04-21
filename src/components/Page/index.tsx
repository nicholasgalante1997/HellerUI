import React, { ComponentType } from 'react';
import StandardPage from './Standard/MarkupPage';
import MarkdownPage from './Markdown/MarkdownPage';
import { BasePage } from './types';

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
