import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './types';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.div<LoaderProps>`
  border-radius: 50%;
  border: 4px solid ${(props) => props.fillColor ?? 'rgba(270, 270, 270, 0.72)'};
  border-top: 4px solid ${(props) => props.mainColor ?? 'deeppink'};
  height: ${(props) => props.height ?? '64px'};
  width: ${(props) => props.width ?? '64px'};
  animation: ${spin} ${(props) => props.spinRate ?? 1}s linear infinite;
`;
