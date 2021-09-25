import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';

enum ButtonSizeEnum {
  xs = 'extra-small',
  sm = 'small',
  rg = 'regular',
  lg = 'large',
  xl = 'extra-large',
  bb = 'biggest-boy'
};
export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  size?: ButtonSizeEnum
}

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
  backgroundColor = colors.nately.lavenderGray,
  color = '#F3F4F6',
  size = ButtonSizeEnum.rg
}) => {

  const buttonStyles: CSS.Properties = {
    /**
     * General Styles for all buttons
     */
    borderRadius: '4px',
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    fontFamily: 'Gill Sans, sans-serif',
    backgroundColor: primary ? colors.nately.amethyst : backgroundColor,
    color: primary ? '#F3F4F6' : color,
    padding: '10px 20px',

    /**
     * Background Color 
     */
  };

  return (
    <button type="button" onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};
