import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';
import { ShadowStyles, baseShadowHex } from '../../globals/styles';

export enum ButtonSize {
  xs = 'extra-small',
  sm = 'small',
  rg = 'regular',
  lg = 'large',
  xl = 'extra-large',
  bb = 'biggest-boy'
}

export enum ButtonVariants {
  twilight = 'twilight',
  twilightGradient = 'twilight-gradient',
  roseGarden = 'rose-garden',
  roseGardenGradient = 'rose-garden-gradient',
  skyline = 'skyline',
  skylineGradient = 'skyline-gradient'
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSS.Properties;
  backgroundColor?: string;
  color?: string;
  size?: ButtonSize;
  shadow?: ShadowStyles | null | undefined; 
  shadowColor?: string | null | undefined;
  variant?: ButtonVariants | null | undefined;
  invert?: boolean;
  className?: string;
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
  shadowColor = baseShadowHex,
  size = ButtonSize.rg,
  shadow = null,
  style = {},
  variant = null,
  invert = false,
  className = null,
}) => {
  /**
   * Dynamic style attributes
   */
  let background = backgroundColor;
  let padding = '10px 20px';
  let fontSize = '1rem';
  let border = null;
  let boxShadow: string | null = null;

  const variantHandler = (variant: ButtonVariants | string | null) => {
    if (!variant) return;
    switch (variant) {
      case 'twilight':
        background = colors.nately.middleBluePurple;
        color = colors.nately.darkPurple;
        break;
      case 'twilight-gradient':
        background = `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`;
        color = '#fff';
        break;
      case 'rose-garden':
        background = colors.dunbar.amaranthPurple;
        color = colors.dunbar.lightPink;
        return;
      case 'rose-garden-gradient':
        background = `linear-gradient(to right, ${colors.dunbar.amaranthPurple}, ${colors.dunbar.lightPink})`;
        color = '#fff';
        return;
      case 'skyline':
        background = colors.dunbar.flourescentBlue;
        color = colors.dunbar.lightCyan;
        return;
      case 'skyline-gradient':
        background = `linear-gradient(to right, ${colors.dunbar.flourescentBlue}, ${colors.dunbar.lightCyan})`;
        color = '#fff';
        return;
      default:
        return;
    }
  };

  const sizeHandler = (size: ButtonSize | string) => {
    if (size === ButtonSize.rg) return;
    switch (size) {
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
        fontSize = '1.75rem';
        return;
      case ButtonSize.xl:
        padding = '24px 48px';
        fontSize = '2.25rem';
        return;
      case ButtonSize.bb:
        padding = '32px 64px';
        fontSize = '2.75rem';
        return;
      default:
        return;
    }
  };

  const shadowHandler = (shdaow: ShadowStyles | null) => {
    if (!shadow) return;
    switch(shadow){
      case ShadowStyles.sharp:
        boxShadow = `4px 4px ${shadowColor}`;
        return;
      default:
        return;
    }
  };

  variantHandler(variant);
  sizeHandler(size);
  shadowHandler(shadow);

  const validateNonGradient: () => boolean = () => variant?.split('-')[-1] !== 'gradient';

  /**
   * The last thing checked always is `invert`
   * if `true` && variant isn't of a gradient type,
   * we flip background and border values;
   */

  if (invert && validateNonGradient()) {
    border = `1px solid ${background}`;
    color = background;
    background = '#fff';
  }

  const buttonStyles: CSS.Properties = {
    /**
     * General Styles for all buttons
     */
    borderRadius: size !== ButtonSize.bb ? '4px' : '8px',
    border: border || 0,
    cursor: 'pointer',
    display: 'block',
    lineHeight: 1,
    fontFamily: 'Gill Sans, sans-serif',

    /**
     * Dynamic Style Attributes;
     */
    background,
    color,
    padding,
    fontSize,
    boxShadow: boxShadow ?? 'none'
  };

  return (
    <button
      className={className ?? 'hellerui-default-button'}
      type="button"
      onClick={onClick}
      style={{ ...buttonStyles, ...style }}
    >
      {children}
    </button>
  );
};
