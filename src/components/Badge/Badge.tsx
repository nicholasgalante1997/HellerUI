/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';

export enum BadgeSize {
  xs = 'extra-small',
  sm = 'small',
  rg = 'regular',
  lg = 'large',
  xl = 'extra-large',
  bb = 'biggest-boy'
}
export interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  size?: BadgeSize;
  backgroundColor?: string;
  style?: CSS.Properties;
  onClick?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = '#fff',
  backgroundColor = colors.cathcart.blackCoral,
  size = BadgeSize.sm,
  style = {},
  onClick = () => {},
  className = 'heller-ui-badge-default',
}) => {
  let padding: string = '4px 8px';
  let fontSize: string = '0.75rem';
  let borderRadius: string = '16px';

  const sizeHandler = () => {
    if (size === BadgeSize.sm) return;
    switch (size) {
      case BadgeSize.xs:
        padding = '2px 4px';
        fontSize = '0.5rem';
        break;
      case BadgeSize.rg:
        padding = '6px 12px';
        fontSize = '1rem';
        borderRadius = '24px';
        break;
      default:
        break;
    }
  };

  sizeHandler();

  const badgeStyles: CSS.Properties = {
    color,
    backgroundColor,
    padding,
    fontSize,
    borderRadius,
    border: 0,
    fontFamily: 'Gill Sans, sans-serif',
  };

  return (
    <span
      onClick={onClick}
      className={className}
      style={{ ...badgeStyles, ...style }}
    >
      {children}
    </span>
  );
};
