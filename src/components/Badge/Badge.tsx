/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import CSS from 'csstype';
import colors from '../../globals/styles/colors';
import { HellerSize, HellerVariant } from '../../globals/styles';

export interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  asNotification?: boolean;
  size?: 'extra-small' | 'small' | 'regular' | 'large';
  backgroundColor?: string;
  style?: CSS.Properties;
  onClick?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = '#fff',
  backgroundColor = colors.cathcart.blackCoral,
  size = HellerSize.sm,
  asNotification = false,
  style = {},
  onClick = () => {},
  className = 'heller-ui-badge-default',
}) => {
  let padding: string = '4px 8px';
  let fontSize: string = '0.65rem';
  let borderRadius: string = '16px';
  /**
   * ANCHOR: we are using the asNotification boolean as a shorthand for setting the xs size
   * this is with the intention that one can simply render a <Badge asNotification /> in
   * the event they mean to display a new chat message, etc.
   */
  if (asNotification) {
    // eslint-disable-next-line no-param-reassign
    size = HellerSize.xs;
  }

  const sizeHandler = () => {
    if (size === HellerSize.sm) return;
    switch (size) {
      case HellerSize.xs:
        padding = '0px';
        fontSize = '0.5rem';
        break;
      case HellerSize.rg:
        padding = '6px 10px';
        fontSize = '0.85rem';
        borderRadius = '24px';
        break;
      case HellerSize.lg:
        padding = '12px 16px';
        fontSize = '1.15rem';
        borderRadius = '36px';
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
    display: size === HellerSize.xs ? 'inline-block' : 'inline-flex',
    minWidth: size === HellerSize.xs ? '10px' : undefined,
    minHeight: size === HellerSize.xs ? '10px' : undefined,
    fontSize,
    borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: 0,
    fontFamily: 'Poppins Regular',
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
