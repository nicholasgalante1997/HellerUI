import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';

export enum ButtonSizeEnum {
  xs = 'extra-small',
  sm = 'small',
  rg = 'regular',
  lg = 'large',
  xl = 'extra-large',
  bb = 'biggest-boy'
};

export enum ButtonVariants {
  twilight = 'twilight',

};

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSS.Properties;
  backgroundColor?: string;
  color?: string;
  size?: ButtonSizeEnum,
  variant?: ButtonVariants | null | undefined 
}

/**
 * 
 * - You must pass in children to the Button component, as the internal text you're intending to display
 * - Works best with raw text but any text element as a child will work
 * - "Some men are born mediocre, some men achieve mediocrity, and some men have mediocrity thrust upon them."
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  backgroundColor = colors.nately.lavenderGray,
  color = '#F3F4F6',
  size = ButtonSizeEnum.rg,
  style = {},
  variant = null,
}) => {
  // Transferrence variable
  let background = backgroundColor;
  const variantHandler = (variant: string | null) => {
    if (!variant) return;
    switch(variant){
      case 'twilight':
        background = `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`;
        break;
      default:
        return null;
    }
  };
  variantHandler(variant);

  const buttonStyles: CSS.Properties = {
    /**
     * General Styles for all buttons
     */
    borderRadius: '4px',
    border: 0,
    cursor: 'pointer',
    display: 'block',
    lineHeight: 1,
    fontFamily: 'Gill Sans, sans-serif',
    background: background,
    color: color,
    padding: '10px 20px',

    /**
     * Background Color 
     */
  };

  return (
    <button type="button" onClick={onClick} style={{...buttonStyles, ...style}}>
      {children}
    </button>
  );
};
