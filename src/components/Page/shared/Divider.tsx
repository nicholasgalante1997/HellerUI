// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

type HellerDividerProps = {
    fadeColor?: string;
    focusColor?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const HellerDivider = styled.hr<HellerDividerProps>`
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
`;
