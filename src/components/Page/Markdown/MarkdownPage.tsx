/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import * as Font from '../../Typography';
import Container from '../../Container';
import type { MarkdownPageProps } from '../types';
import { HellerSection } from '../shared/Section';
import PageHeading from '../shared/PageHeading';
import {
  HellerDivider,
  defaultState as dividerDefaultState
} from '../../Divider/Divider';
import { Break } from '../../Break/Break';
import { defaultColor, hellerThemeOptions } from '..';

const { Paragraph, Heading } = Font;

const Page = (props: MarkdownPageProps) => {
  const {
    title,
    titleColor = defaultColor,
    titleSize = 'h2',
    subtitle,
    subtitleColor = defaultColor,
    subtitleSize = 'md',
    withActionBar = undefined,
    id = 'heller-page-base',
    customStyles = {},
    margin,
    padding,
    justifyContent = 'flex-start',
    withDividers = false,
    dividerProps = dividerDefaultState,
    customComponentMap = {},
    content,
    contentTextColor = defaultColor,
    theme = 'none'
  } = props;

  let mainThemeColor: string | null = null;
  let supportingThemeColor: string | null = null;

  if (theme !== 'none') {
    mainThemeColor = hellerThemeOptions[theme].mainFill;
    supportingThemeColor = hellerThemeOptions[theme].supportFill;
  }

  return (
    <HellerSection
      id={id}
      justifyContent={justifyContent}
      customStyles={customStyles}
      margin={margin}
      padding={padding}
      contentTextColor={
        theme !== 'none' ? supportingThemeColor! : contentTextColor
      }
    >
      <PageHeading
        title={title}
        titleColor={theme !== 'none' ? mainThemeColor! : titleColor}
        dividerProps={dividerProps}
        withDividers={withDividers}
        subtitle={subtitle}
        subtitleColor={theme !== 'none' ? supportingThemeColor! : subtitleColor}
        subtitleSize={subtitleSize}
        withActionBar={withActionBar}
        titleSize={titleSize}
      />

      {/* Page Content */}
      <Container
        className="heller-content-container"
        width="100%"
        customStyles={{
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}
      >
        <ReactMarkdown
          children={content}
          components={{
            h1: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h1"
              >
                {children}
              </Heading>
            ),
            h2: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h2"
              >
                {children}
              </Heading>
            ),
            h3: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h3"
              >
                {children}
              </Heading>
            ),
            h4: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h4"
              >
                {children}
              </Heading>
            ),
            h5: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h5"
              >
                {children}
              </Heading>
            ),
            h6: ({ node, children, ...props }) => (
              <Heading
                {...props}
                scale={500}
                color={theme !== 'none' ? mainThemeColor! : titleColor}
                as="h6"
              >
                {children}
              </Heading>
            ),
            p: ({ node, children, ...props }) => (
              <Paragraph
                {...props}
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={14}
              >
                {children}
              </Paragraph>
            ),
            em: ({ node, children, ...props }) => (
              <Paragraph
                {...props}
                italic
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={14}
              >
                {children}
              </Paragraph>
            ),
            i: ({ node, children, ...props }) => (
              <Paragraph
                {...props}
                italic
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={14}
              >
                {children}
              </Paragraph>
            ),
            strong: ({ node, children, ...props }) => (
              <Paragraph
                {...props}
                bold
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={14}
              >
                {children}
              </Paragraph>
            ),
            blockquote: ({ node, children, ...props }) => (
              <Paragraph
                {...props}
                thin
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={14}
              >
                {children}
              </Paragraph>
            ),
            ul: ({ node, children, ...props }) => (
              <Paragraph
                bold
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={20}
              >
                {children}
              </Paragraph>
            ),
            li: ({ node, children, ...props }) => (
              <Paragraph
                thin
                color={theme !== 'none' ? supportingThemeColor! : subtitleColor}
                fontSize={20}
              >
                {children}
              </Paragraph>
            ),
            br: () => <Break height="1rem" />,
            hr: () => <HellerDivider {...dividerProps} />,
            ...customComponentMap
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[[rehypeRaw], [rehypeSanitize]]}
          unwrapDisallowed
        />
      </Container>
    </HellerSection>
  );
};

export default Page;
