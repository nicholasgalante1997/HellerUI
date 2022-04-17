// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Break = styled.div<{ height?: string }>`
    height: ${(props) => props.height ?? '1rem'};
    width: 100%;
    display: flex;
    background: inherit;
    border: none;
    border-radius: 0px;
    opacity: 0%;
    margin: 0;
    padding: 0;
`;
