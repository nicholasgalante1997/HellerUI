import styled from 'styled-components';
import { TextElementKeyType } from './types';

export const StyledH1 = styled.h1``;
export const StyledH2 = styled.h2``;
export const StyledH3 = styled.h3``;
export const StyledH4 = styled.h4``;
export const StyledH5 = styled.h5``;
export const StyledH6 = styled.h6``;

export const StyledP = styled.p``;
export const StyledItalic = styled.i``;
export const StyledBold = styled.b``;
export const StyledCodeBlock = styled.code``;
export const StyledSpan = styled.span``;

export function getTextElement(impl: TextElementKeyType) {
  switch (impl) {
    case 'h1':
      return StyledH1;
    case 'h2':
      return StyledH2;
    case 'h3':
      return StyledH3;
    case 'h4':
      return StyledH4;
    case 'h5':
      return StyledH5;
    case 'h6':
      return StyledH6;
    case 'p':
      return StyledP;
    case 'b':
      return StyledBold;
    case 'i':
      return StyledItalic;
    case 'span':
      return StyledSpan;
    default:
      return StyledP;
  }
}
