import React from 'react';
import * as Font from '../../Typography';
import { BasePage as BasePageType } from '../types';
import ActionBar from './ActionBar';
import { Break } from '../../Break';
import { HellerDivider } from '../../Divider';
import { getSubtitleFontStyles } from '../utils';

const { Paragraph, Heading } = Font;
const TitleSection = Heading;
const SubTitle = Paragraph;

type PageHeadingProps = Pick<
  BasePageType<{}>,
  | 'withActionBar'
  | 'withDividers'
  | 'dividerProps'
  | 'dangerouslyOverridePageHeading'
  | 'title'
  | 'titleColor'
  | 'subtitle'
  | 'subtitleColor'
  | 'subtitleSize'
  | 'titleSize'
>;

const PageHeading = ({
  withActionBar,
  withDividers,
  dividerProps,
  dangerouslyOverridePageHeading,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  subtitleSize,
  titleSize
}: PageHeadingProps) => {

  if (dangerouslyOverridePageHeading?.headingNode) {
    return dangerouslyOverridePageHeading.headingNode
  }

  return (
  <>
    {/* Action Bar */}
    {withActionBar ? (
      <>
        <ActionBar {...withActionBar} />
        <Break />
      </>
    ) : null}

    {/* Page Title */}
    <TitleSection as={titleSize} scale={500} color={titleColor}>
      {title}
    </TitleSection>
    <Break height="0.5rem" />

    {/* Section Subtitle */}
    {subtitle ? (
      <SubTitle
        customStyles={{
          lineHeight: getSubtitleFontStyles(subtitleSize!).lineHeight,
          fontWeight: getSubtitleFontStyles(subtitleSize!).fontWeight
        }}
        thin
        color={subtitleColor}
        fontSize={getSubtitleFontStyles(subtitleSize!).fontSize}
      >
        {subtitle}
      </SubTitle>
    ) : null}

    {/* Section Title Break */}
    {withDividers ? (
      <HellerDivider {...dividerProps!} data-testid="hr" />
    ) : (
      <Break height="1.5rem" />
    )}
  </>
)
    };

export default PageHeading;
