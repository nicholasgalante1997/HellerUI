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
import { HellerDivider, defaultState as dividerDefaultState } from '../../Divider/Divider';
import { Break } from '../../Break/Break';
import ActionBar from '../shared/ActionBar';
import { getSubtitleFontStyles } from '../utils';

const { Paragraph, Heading } = Font;

const Page = (props: MarkdownPageProps) => {
  const {
    title,
    titleColor,
    subtitle,
    subtitleColor = 'rgba(270,270,270,0.8)',
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
  } = props;

  const TitleSection = Heading;
  const SubTitle = Paragraph;

  return (
    <HellerSection
      id={id}
      justifyContent={justifyContent}
      customStyles={customStyles}
      margin={margin}
      padding={padding}
    >
      {/* Action Bar */}
      {withActionBar ? (
        <>
          <ActionBar {...withActionBar} />
          <Break />
        </>
      ) : null}

      {/* Page Title */}
      <TitleSection as='h1' scale={500} color={titleColor}>{title}</TitleSection>

      {/* Section Title Break */}
      { withDividers ? <HellerDivider {...dividerProps} /> : <Break height="1.5rem" /> }
      
      {/* Section Subtitle */}
      { subtitle ? (
        <SubTitle
          customStyles={{
            lineHeight: getSubtitleFontStyles(subtitleSize).lineHeight,
            fontWeight: getSubtitleFontStyles(subtitleSize).fontWeight,
          }}
          thin
          color={subtitleColor}
          fontSize={getSubtitleFontStyles(subtitleSize).fontSize}
        >
          {subtitle}

        </SubTitle>
      ) : null }
      <Break height='0.5rem' />

      {/* Page Content */}
      <Container
        className='heller-content-container'
        width={'100%'}
        customStyles={{
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <ReactMarkdown 
            children={content}  
            components={{
                'h1': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h1">{children}</Heading>,
                'h2': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h2">{children}</Heading>,
                'h3': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h3">{children}</Heading>,
                'h4': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h4">{children}</Heading>,
                'h5': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h5">{children}</Heading>,
                'h6': ({node, children, ...props }) => <Heading {...props} scale={500} color={titleColor} as="h6">{children}</Heading>,
                'p': ({node, children, ...props }) => <Paragraph {...props} color={titleColor} fontSize={14}>{children}</Paragraph>,
                'em': ({node, children, ...props }) => <Paragraph {...props} italic color={titleColor} fontSize={14}>{children}</Paragraph>,
                'i': ({node, children, ...props }) => <Paragraph {...props} italic color={titleColor} fontSize={14}>{children}</Paragraph>,
                'strong': ({node, children, ...props }) => <Paragraph {...props} bold color={titleColor} fontSize={14}>{children}</Paragraph>,
                'blockquote': ({node, children, ...props }) => <Paragraph {...props} thin color={subtitleColor} fontSize={14}>{children}</Paragraph>,
                'ul': ({node, children, ...props }) => <Paragraph bold color={subtitleColor} fontSize={20}>{children}</Paragraph>,
                'li': ({node, children, ...props }) => <Paragraph thin color={subtitleColor} fontSize={14}>{children}</Paragraph>,
                'br': () => <Break height='1rem' />,
                'hr': () => <HellerDivider {...dividerProps} />,
                ...customComponentMap
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypeRaw], [rehypeSanitize]]}
            unwrapDisallowed={true}
        />
      </Container>
    </HellerSection>
  );
};

export default Page;
