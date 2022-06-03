import React from 'react';
import styled from 'styled-components';

export const StyledCloseButton = styled.span<{ color: string }>`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins Bold';
  font-size: 14px;
  color: ${(props) => props.color};
  cursor: pointer;
`;
