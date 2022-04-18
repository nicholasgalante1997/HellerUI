/* eslint-disable no-undef */
import React from 'react';
import * as Font from '../../Typography';
import Container from '../../Container';
import type { StandardPageProps } from '../types';
import { HellerSection } from '../shared/Section';
import { HellerDivider, defaultState as dividerDefaultState } from '../../Divider/Divider';
import { Break } from '../../Break/Break';
import ActionBar from '../shared/ActionBar';

const { Paragraph, Heading } = Font;

function contentEngine(content: string | string[] | string[][] | JSX.Element) {
  if (Array.isArray(content)) {
    return content.map((t) => <Paragraph color="white" fontSize={16}>{t}<br/></Paragraph>);
  }
  if (typeof content === 'string') {
    const splitArr = content.split(/(\n|\s\s)/);
    if (splitArr.length > 1) {
      splitArr.map((t) => <Paragraph color="white" fontSize={16}>{t}</Paragraph>);
    }
    return <Paragraph customStyles={{ wordBreak: 'break-all', whiteSpace: 'normal' }} color="white" fontSize={16}>{content}</Paragraph>;
  }
  return content;
}

function getSubtitleFontStyles(size: 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'sm':
      return {
        fontSize: 24,
        lineHeight: 1.15,
        fontWeight: 'normal',
      };
    case 'lg':
      return {
        fontSize: 40,
        lineHeight: 1.15,
        fontWeight: 'normal',
      };
    default:
      return {
        fontSize: 32,
        lineHeight: 1.15,
        fontWeight: 'normal',
      };
  }
}

const Page = (props: StandardPageProps) => {
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
        customStyles={{
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {contentEngine(content)}
      </Container>
    </HellerSection>
  );
};

export default Page;
