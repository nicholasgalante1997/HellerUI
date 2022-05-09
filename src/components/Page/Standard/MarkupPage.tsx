/* eslint-disable dot-notation */
/* eslint-disable no-undef */
import React from 'react';
import Container from '../../Container';
import type { StandardPageProps } from '../types';
import { HellerSection } from '../shared/Section';
import PageHeading from '../shared/PageHeading';
import { contentEngine } from '../utils/contentEngine';
import { defaultState as dividerDefaultState } from '../../Divider';
import { hellerThemeOptions, defaultColor } from '../defaults';

const Page = (props: StandardPageProps) => {
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
    content,
    contentTextColor = defaultColor,
    theme = 'none',
    dangerouslyOverrideInnerContentStyles,
  } = props;

  let mainThemeColor: string | null = null;
  let supportingThemeColor: string | null = null;

  if (theme !== 'none') {
    mainThemeColor = hellerThemeOptions[theme]['mainFill'];
    supportingThemeColor = hellerThemeOptions[theme]['supportFill'];
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
        customStyles={{
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          ...(dangerouslyOverrideInnerContentStyles ? dangerouslyOverrideInnerContentStyles.styles : {})
        }}
      >
        {contentEngine(
          content,
          theme !== 'none' ? supportingThemeColor! : contentTextColor
        )}
      </Container>
    </HellerSection>
  );
};

export default Page;
