/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import CSS from 'csstype';
import colors from '../../colors';

export interface ProgressBarProps {
  initialState: number;
  max?: number;
  color?: string;
  style: CSS.Properties;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  initialState,
  max = 100,
  color = colors.mcwatt.flickrPink,
  style = {},
}) => {
  const [progress, setProgress] = React.useState<number>(initialState);
  const progressBarStyles: CSS.Properties = {
    backgroundColor: color,
  };
  return (
    <div
      style={{
        ...progressBarStyles,
        ...style,
      }}
    >
      <div>
        <span />
      </div>
    </div>
  );
};
