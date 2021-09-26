import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';

export enum ButtonSize {
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
  size?: ButtonSize,
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
  size = ButtonSize.rg,
  style = {},
  variant = null,
}) => {
  /** 
   * Dynamic style attributes
  */ 
  let background = backgroundColor;
  let padding = '10px 20px';
  let fontSize = '1rem';
  
  const variantHandler = (variant: ButtonVariants | string | null) => {
    if (!variant) return;
    switch(variant){
      case 'twilight':
        background = `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`;
        break;
      default:
        return null;
    }
  };

  const sizeHandler = (size: ButtonSize | string ) => {
    if (size === ButtonSize.rg) return;
    switch(size){
      case ButtonSize.xs:
        padding = '4px 8px';
        fontSize = '0.5rem';
        return;
      case ButtonSize.sm:
        padding = '8px 16px';
        fontSize = '0.75rem';
        return;
      case ButtonSize.lg:
        padding = '16px 32px';
        fontSize = '2rem';
        return;
      case ButtonSize.xl:
        padding = '24px 48px';
        fontSize = '2.25rem';
        return;
      default:
        return;
    }
  };

  variantHandler(variant);
  sizeHandler(size);

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

    /**
     * Dynamic Style Attributes;
     */
    background: background,
    color: color,
    padding: padding,
    fontSize: fontSize,

  };

  return (
    <button type="button" onClick={onClick} style={{...buttonStyles, ...style}}>
      {children}
    </button>
  );
};
