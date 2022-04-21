import React from 'react';
import CSS from 'csstype';
import ColorScale from 'color-scales';
import { Gradient } from '../../@types';
import colors from '../../globals/styles/colors';
import { formatGradient } from '../../utils';
import '../../index.css';

export interface ButtonProps {
  children: React.ReactNode;
  asGradient?: boolean;
  gradient?: Gradient;
  borderColor?: string;
  onClick?: () => void;
  style?: CSS.Properties;
  backgroundColor?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  height?: string | null;
  width?: string | null;
  fullWidth?: boolean;
  ghost?: boolean;
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
  asGradient = null,
  gradient = null,
  color = '#F3F4F6',
  borderColor,
  size = 'md',
  style = {},
  ghost = false,
  className = null,
  height,
  width,
  fullWidth = false
}) => {
  const [active, setActive] = React.useState(false);
  const onMouseEnter = () => setActive(true);
  const onMouseLeave = () => setActive(false);
  /**
   * ANCHOR:
   * Dynamic style attributes
   */

  const colorPalette = new ColorScale(0, 100, [backgroundColor, '#000000']);

  let background = active
    ? colorPalette.getColor(40).toHexString()
    : backgroundColor;
  let fontColor = color;
  let padding = '0.25rem 0.5rem';
  let fontSize = '0.75rem';
  let minWidth = '3rem';
  let minHeight = '1.5rem';
  let border = borderColor
    ? `1px solid ${borderColor}`
    : '1px solid rgba(0,0,0,0.4)';

  const sizeHandler = () => {
    if (size === 'md') return;
    switch (size) {
      case 'sm':
        fontSize = '0.5rem';
        minWidth = '2.5rem';
        minHeight = '1.25rem';
        break;
      case 'lg':
        padding = '0.75rem 1rem';
        fontSize = '1rem';
        minWidth = '3.5rem';
        minHeight = '1.75rem';
        break;
      default:
        break;
    }
  };

  sizeHandler();

  /**
   * ANCHOR:
   * The last thing checked always is `invert`
   * if `true` && variant isn't of a gradient type,
   * we flip background and border values;
   */
  if (ghost && !asGradient) {
    border = `1px solid ${background}`;
    fontColor = background;
    background = borderColor ?? 'inherit';
  } else {
    border = borderColor ?? '1px solid rgba(0,0,0,0.7)';
  }

  if (asGradient && gradient) background = formatGradient(gradient).background;

  const buttonStyles: CSS.Properties = {
    /**
     * ANCHOR:
     * General Styles for all buttons
     */
    borderRadius: '0.25rem',
    border: border || 0,
    cursor: 'pointer',
    display: 'block',
    lineHeight: 1,
    fontFamily: 'Poppins Bold',
    fontWeight: 300,
    /**
     * ANCHOR:
     * Dynamic Style Attributes;
     */
    background,
    color: fontColor,
    padding,
    fontSize,
    minHeight,
    minWidth
  };

  if (height) Object.assign(buttonStyles, { height });
  if (width) Object.assign(buttonStyles, { width });
  if (fullWidth) Object.assign(buttonStyles, { width: '100%' });

  return (
    <button
      className={`withHover ${className ?? 'hellerui-default-button'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      onClick={onClick}
      style={{ ...buttonStyles, ...style }}
    >
      {children}
    </button>
  );
};
