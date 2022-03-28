import React from 'react';
import {
  Paragraph, ParagraphBold, ParagraphItalic, ParagraphBoldItalic,
} from './Styles';
import { ParagraphProps } from './types';

export default (props: ParagraphProps) => {
  let ContentWrapper = Paragraph;
  const {
    bold, color, customStyles = {}, fontSize, children, italic,
  } = props;
  if (bold) ContentWrapper = ParagraphBold;
  if (italic) ContentWrapper = ParagraphItalic;
  if (italic && bold) ContentWrapper = ParagraphBoldItalic;

  return (
    <ContentWrapper fontSize={fontSize} color={color} style={customStyles}>
      {children}
    </ContentWrapper>
  );
};
