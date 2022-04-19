/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Paragraph } from '../../Typography';

export function contentEngine(
  content: string | string[] | JSX.Element,
  color: string
) {
  if (Array.isArray(content)) {
    return content.map((t) => (
      <Paragraph color={color} fontSize={16}>
        {t}
        <br />
      </Paragraph>
    ));
  }
  if (typeof content === 'string') {
    const splitArr = content.split(/([\n]+|[\s]{2})/);
    if (splitArr.length > 1) {
      splitArr.map((t) => (
        <Paragraph color={color} fontSize={16}>
          {t}
          <br />
        </Paragraph>
      ));
    }
    return (
      <Paragraph
        customStyles={{ wordBreak: 'break-all', whiteSpace: 'normal' }}
        color={color}
        fontSize={16}
      >
        {content}
        <br />
      </Paragraph>
    );
  }
  return content;
}
