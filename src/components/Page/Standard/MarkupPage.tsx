/* eslint-disable no-undef */
import React from 'react';
import { NativeMediaTitleProps } from 'src/components/MediaTitle/types';
import type { StandardPageProps } from '../types';
import { HellerSection } from '../shared/Section';
import { HellerDivider, defaultState as dividerDefaultState } from '../shared/Divider';
import { Break } from '../shared/Break';
import ActionBar from '../shared/ActionBar';
import * as Font from '../../Typography';
import MediaTitle from '../../MediaTitle';
import { ContentSectionMap } from '../shared/SectionMap';

const { Paragraph } = Font;

function contentEngine(content: string | string[] | string[][] | JSX.Element) {
  if (Array.isArray(content)) {
    if (Array.isArray(content[0])) return content.map((arr, i) => <ContentSectionMap heading={content[i][i]} text={content[i][i]} color="white" />);
    return content.map((t) => <Paragraph color="white" fontSize={20}>{t}</Paragraph>);
  }
  if (typeof content === 'string') {
    const splitArr = content.split(/(\n|\s\s)/);
    if (splitArr.length > 1) {
      splitArr.map((t) => <Paragraph color="white" fontSize={20}>{t}</Paragraph>);
    }
    return <Paragraph customStyles={{ wordBreak: 'break-all', whiteSpace: 'normal' }} color="white" fontSize={20}>{content}</Paragraph>;
  }
  return content;
}

function getSubtitleFontStyles(size: 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'sm':
      return {
        fontSize: 12,
        lineHeight: 1.15,
        fontWeight: 'normal',
      };
    case 'lg':
      return {
        fontSize: 28,
        lineHeight: 1.15,
        fontWeight: 'normal',
      };
    default:
      return {
        fontSize: 20,
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
    withMediaTitle,
    id = 'heller-page-base',
    customStyles = {},
    gradient,
    gradientMediaTitle,
    imageUrl,
    imageMediaTitle,
    margin,
    padding,
    justifyContent = 'flex-start',
    withDividers = false,
    dividerProps = dividerDefaultState,
    content,
  } = props;

  const TitleSection = MediaTitle;
  const titleSectionProps: NativeMediaTitleProps = {
    title,
    titleColor,
    fullWidth: true,
    height: '4rem',
    titleLocation: 'bottom left',
    headingCustomProps: {
      as: 'h5',
      scale: 300,
    },
  };

  const SubTitle = Paragraph;

  if (
    withMediaTitle
      && imageMediaTitle
      && imageUrl
  ) {
    titleSectionProps.asImage = true;
    titleSectionProps.url = imageUrl;
  }

  if (
    withMediaTitle
      && gradientMediaTitle
      && gradient
  ) {
    titleSectionProps.asGradient = true;
    titleSectionProps.gradient = gradient;
  }

  if (!withMediaTitle) {
    titleSectionProps.bgCovenant = {
      overrideAndDangerouslySetBg: 'inherit',
    };
  }

  return (
    <HellerSection
      id={id}
      justifyContent={justifyContent}
      customStyles={customStyles}
      margin={margin}
      padding={padding}
    >
      {withActionBar ? (
        <>
          <ActionBar {...withActionBar} />
          <Break />
        </>
      ) : null}
      <TitleSection {...titleSectionProps} padding={0} />
      { withDividers ? <HellerDivider {...dividerProps} /> : <Break height="1.5rem" /> }
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
      {contentEngine(content)}
    </HellerSection>
  );
};

export default Page;
