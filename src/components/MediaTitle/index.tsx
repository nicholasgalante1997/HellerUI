import React from 'react';
import { Properties } from 'csstype';
import Container from '../Container';
import { MediaTitleProps } from './types';
import { getPadding } from '../../utils';
import { Heading } from '../Typography';

const headingDefaultStyles: Properties = {
  margin: '0.15rem',
  padding: '0px'
};

export const locationDict = {
  'bottom left': {
    justifyContent: 'end',
    alignItems: 'start'
  },
  'bottom right': {
    justifyContent: 'end',
    alignItems: 'end'
  },
  'top left': {
    justifyContent: 'start',
    alignItems: 'start'
  },
  'top right': {
    justifyContent: 'start',
    alignItems: 'end'
  }
};

const MediaTitle = (props: MediaTitleProps) => {
  const {
    title,
    titleColor = 'white',
    titleLocation = 'bottom left',
    headingCustomProps = {},
    asGradient = false,
    asImage = false,
    customStyles = {},
    gradient,
    bgCovenant = null,
    solidColor = 'none',
    padding = 2,
    url,
    fullWidth = false,
    height = null,
    width = null
  } = props;

  const nativeStyles: Properties = {
    padding: getPadding(padding),
    ...locationDict[titleLocation],
    ...customStyles
  };

  if (height)
    nativeStyles.height = typeof height === 'string' ? height : `${height}px`;

  if (width)
    nativeStyles.width = typeof width === 'string' ? width : `${width}px`;

  if (fullWidth) nativeStyles.width = '100%';

  if (asGradient) {
    if (!gradient) {
      console.warn(
        '<MediaTitle /> Gradient Issue: Cannot implement gradient w/o a gradient prop.'
      );
      console.warn('<MediaTitle /> gradient: ', JSON.stringify(gradient));
    } else {
      return (
        <Container customStyles={nativeStyles} gradient={gradient}>
          <Heading
            customStyles={{ ...headingDefaultStyles }}
            {...headingCustomProps}
            color={titleColor}
          >
            {title}
          </Heading>
        </Container>
      );
    }
  }

  if (asImage) {
    return (
      <Container customStyles={nativeStyles} image={url}>
        <Heading
          customStyles={{ ...headingDefaultStyles }}
          {...headingCustomProps}
          color={titleColor}
        >
          {title}
        </Heading>
      </Container>
    );
  }

  return (
    <Container
      customStyles={nativeStyles}
      background={bgCovenant?.overrideAndDangerouslySetBg ?? solidColor}
    >
      <Heading
        customStyles={{ ...headingDefaultStyles }}
        {...headingCustomProps}
        color={titleColor}
      >
        {title}
      </Heading>
    </Container>
  );
};

export default MediaTitle;
