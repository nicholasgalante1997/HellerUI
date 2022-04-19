// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { HellerDividerProps } from './types';

export const defaultState = {
  focusColor: '#8c8b8b',
  fadeColor: '#f0f0f0'
};

export const HellerDivider = styled.hr<HellerDividerProps>`
  border: 0;
  height: 1px;
  width: 100%;
  background-image: -webkit-linear-gradient(
    left,
    ${(props) => props.fadeColor},
    ${(props) => props.focusColor},
    ${(props) => props.fadeColor}
  );
  background-image: -moz-linear-gradient(
    left,
    ${(props) => props.fadeColor},
    ${(props) => props.focusColor},
    ${(props) => props.fadeColor}
  );
  background-image: -ms-linear-gradient(
    left,
    ${(props) => props.fadeColor},
    ${(props) => props.focusColor},
    ${(props) => props.fadeColor}
  );
  background-image: -o-linear-gradient(
    left,
    ${(props) => props.fadeColor},
    ${(props) => props.focusColor},
    ${(props) => props.fadeColor}
  );
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
