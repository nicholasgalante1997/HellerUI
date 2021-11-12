/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import CSS from 'csstype';
import { HellerVariant, ShadowStyles } from 'src/globals/styles';
import { FontStyles } from '../common';

export enum HeadingSizes {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export interface HeadingProps {
  children: React.ReactNode | string;
  color?: string;
  size?: number | string;
  variant?: HellerVariant | null | undefined;
  className?: string;
  shadow?: ShadowStyles | null | undefined;
  style?: CSS.Properties;
  asHeading?: HeadingSizes;
  font?: string;
  fontStyle?: FontStyles;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  color = 'black',
  size = '2.45rem',
  font = 'Oxygen, sans-serif',
  variant = null,
  className = 'heller-heading',
  shadow = null,
  style = {},
  asHeading = 'h2',
  fontStyle = 'normal',
}) => {
  let padding: string = '8px';
  let marginBottom: string = '8px';

  if (asHeading === 'h1') {
    size = '3.15rem';
    padding = '10px';
    marginBottom = '10px';
  }

  if (asHeading === 'h3') {
    size = '1.9rem';
  }

  const styles: CSS.Properties = {
    color,
    fontSize: size as string,
    fontFamily: font,
    fontStyle,
  };

  const divStyles: CSS.Properties = {
    padding,
    marginBottom,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={divStyles}>
      <h2 className={className} style={{ ...styles, ...style }}>
        {children}
      </h2>
    </div>
  );
};
