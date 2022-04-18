import React from 'react';
import { Paragraph } from "../../Typography";

export function contentEngine(content: string | string[] | string[][] | JSX.Element) {
    if (Array.isArray(content)) {
      return content.map((t) => <Paragraph color="white" fontSize={16}>{t}<br/></Paragraph>);
    }
    if (typeof content === 'string') {
      const splitArr = content.split(/(\n|\s\s)/);
      if (splitArr.length > 1) {
        splitArr.map((t) => <Paragraph color="white" fontSize={16}>{t}</Paragraph>);
      }
      return <Paragraph customStyles={{ wordBreak: 'break-all', whiteSpace: 'normal' }} color="white" fontSize={16}>{content}</Paragraph>;
    }
    return content;
  }