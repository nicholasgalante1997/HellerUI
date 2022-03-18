import React from 'react';
import StyledDict from './Dict';
import { HeadingProps } from './types';

const Heading = (props: HeadingProps) => {
  const {
    as, children, color, customStyles = {}, scale = 300,
  } = props;
  const Component = StyledDict[as];
  return (<Component style={customStyles} scale={scale} color={color}>{children}</Component>);
};

export default Heading;
