import React from 'react';
import styled from 'styled-components';
import { NativeHellerSectionProps, HellerSectionProps } from '../types';

const StyledSection = styled.section<NativeHellerSectionProps>`
  margin: ${(props: NativeHellerSectionProps) => props?.margin ?? '0 auto'};
  padding: ${(props: NativeHellerSectionProps) => props?.padding ?? '1rem'};
  box-sizing: border-box;
  min-width: 100%;
  min-height: fit-content;
  background: inherit;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: NativeHellerSectionProps) => props.justifyContent};
  align-items: start;
  overflow-x: hidden;
  overflow-y: auto;
  color: ${(props) => props.contentTextColor ?? 'white'};
`;

// eslint-disable-next-line import/prefer-default-export
export const HellerSection = (props: HellerSectionProps) => {
  const {
    children,
    id = 'heller-page-base',
    customStyles = {},
    margin = undefined,
    padding = undefined,
    justifyContent = 'flex-start',
    contentTextColor
  } = props;
  return (
    <StyledSection
      id={id}
      justifyContent={justifyContent}
      style={customStyles}
      margin={margin}
      padding={padding}
      contentTextColor={contentTextColor}
    >
      {children}
    </StyledSection>
  );
};
