import React from 'react';
import colors from '@/colors';
export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  onClick,
  backgroundColor = colors.nately.lavenderGray,
  color = '#F3F4F6',
}) => {
  const buttonStyles = {
    padding: '10px 20px',
    borderRadius: 4,
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    backgroundColor: primary ? colors.nately.amethyst : backgroundColor,
    color: primary ? '#F3F4F6' : color,
    fontFamily: 'Gill Sans, sans-serif',
  };
  return (
    <button type="button" onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};
