import React from 'react';

import {
  Paragraph, ParagraphBold, ParagraphItalic, ParagraphBoldItalic, ParagraphThin,
} from './Styles';
import { ParagraphProps } from './types';

export default (props: ParagraphProps) => {
  let ContentWrapper = Paragraph;
  const {
    bold = false, color, customStyles = {}, fontSize, children, italic = false, thin = false,
  } = props;
  if (bold) ContentWrapper = ParagraphBold;
  if (italic) ContentWrapper = ParagraphItalic;
  if (italic && bold) ContentWrapper = ParagraphBoldItalic;
  if (thin) ContentWrapper = ParagraphThin;

  return (
    <ContentWrapper fontSize={fontSize} color={color} style={customStyles}>
      {children}
    </ContentWrapper>
  );
};
