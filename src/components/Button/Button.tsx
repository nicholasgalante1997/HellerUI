/* eslint-disable no-unused-vars */
import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';
import {
  ShadowStyles, baseShadowHex, HellerSize, HellerVariant,
} from '../../globals/styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSS.Properties;
  backgroundColor?: string;
  color?: string;
  size?: HellerSize;
  shadow?: ShadowStyles | null | undefined;
  shadowColor?: string | null | undefined;
  variant?: HellerVariant | null | undefined;
  invert?: boolean;
  className?: string;
}

/**
 * - You must pass in children to the Button component, as the text you're intending to display
 * - Works best with raw text but any text element as a child will work
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  backgroundColor = colors.yossarian.sea,
  color = '#F3F4F6',
  shadowColor = baseShadowHex,
  size = HellerSize.rg,
  shadow = null,
  style = {},
  variant = null,
  invert = false,
  className = null,
}) => {
  /**
   * ANCHOR:
   * Dynamic style attributes
   */
  let background = backgroundColor;
  let fontColor = color;
  let padding = '10px 20px';
  let fontSize = '1rem';
  let border = null;
  let boxShadow: string | null = null;

  const variantHandler = () => {
    if (!variant) return;
    switch (variant) {
      case 'twilight':
        background = colors.nately.middleBluePurple;
        break;
      case 'twilight-gradient':
        background = `linear-gradient(to right, ${colors.nately.darkPurple}, ${colors.nately.middleBluePurple})`;
        fontColor = '#fff';
        break;
      case 'rose-garden':
        background = colors.dunbar.amaranthPurple;
        break;
      case 'rose-garden-gradient':
        background = `linear-gradient(to right, ${colors.dunbar.amaranthPurple}, ${colors.dunbar.lightPink})`;
        fontColor = '#fff';
        break;
      default:
    }
  };

  const sizeHandler = () => {
    if (size === HellerSize.rg) return;
    switch (size) {
      case HellerSize.xs:
        padding = '4px 8px';
        fontSize = '0.5rem';
        break;
      case HellerSize.sm:
        padding = '8px 16px';
        fontSize = '0.75rem';
        break;
      case HellerSize.lg:
        padding = '16px 32px';
        fontSize = '1.75rem';
        break;
      case HellerSize.xl:
        padding = '24px 48px';
        fontSize = '2.25rem';
        break;
      case HellerSize.bb:
        padding = '32px 64px';
        fontSize = '2.75rem';
        break;
      default:
        break;
    }
  };

  const shadowHandler = () => {
    if (!shadow) return;
    switch (shadow) {
      case ShadowStyles.sharp:
        boxShadow = `4px 4px ${shadowColor}`;
        break;
      default:
        break;
    }
  };

  variantHandler();
  sizeHandler();
  shadowHandler();

  /**
   * ANCHOR:
   * The last thing checked always is `invert`
   * if `true` && variant isn't of a gradient type,
   * we flip background and border values;
   */
  const validateNonGradient: () => boolean = () => variant?.split('-')[-1] !== 'gradient';
  if (invert && validateNonGradient()) {
    border = `1px solid ${background}`;
    fontColor = background;
    background = '#fff';
  }

  const buttonStyles: CSS.Properties = {
    /**
     * ANCHOR:
     * General Styles for all buttons
     */
    borderRadius: size !== HellerSize.bb ? '4px' : '8px',
    border: border || 0,
    cursor: 'pointer',
    display: 'block',
    lineHeight: 1,
    fontFamily: 'Oxygen, sans-serif',

    /**
     * ANCHOR:
     * Dynamic Style Attributes;
     */
    background,
    color: fontColor,
    padding,
    fontSize,
    boxShadow: boxShadow ?? 'none',
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
