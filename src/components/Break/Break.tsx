import React from 'react';
import styled from 'styled-components';

const StyledBreak = styled.div<{ height?: string }>`
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

export const Break = ({ height }: { height?: string }) => (
  <StyledBreak data-testid="br" height={height} />
);
