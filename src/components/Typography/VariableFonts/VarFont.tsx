import React from 'react';

import fontBlob from '../../../fontBlob.json';

import { GoogleFontUrlBuilder } from '../../../@types';
import { useExtraneousFont } from '../../../utils/font/loader';
import { Loader } from '../../Loader';
import { getTextElement } from './VarFont.styles';
import { VarFontProps } from './types';

const VarFont = (props: VarFontProps) => {
  const {
    fontKey,
    implementation,
    children,
    customStyles,
    accessiblility,
    ...rest
  } = props;

  let mutableAccessibleChildren: JSX.Element[] | undefined = undefined;

  const fontData = React.useMemo(() => fontBlob[fontKey], [fontKey]);
  const fontInstance = new GoogleFontUrlBuilder(
    fontData.family,
    fontData.availableFontStyleVariants,
    fontData.meta
  );
  const { failed, loading } = useExtraneousFont(fontInstance.build());

  if (loading) {
    <Loader />;
  }

  if (failed) {
    console.error('[FATAL] link creation failed. falling back to local font.');
    return <div id="null-link-exception" data-dev="check-console" />;
  }

  if (accessiblility?.bionic && typeof children === 'string') {
    mutableAccessibleChildren = children.split(' ').map((word) => {
      const wordLength = word.length;
      const boldCharCount = Math.ceil(wordLength / 2);
      const boldSubString = word.substring(0, boldCharCount);
      const trailingSubString = word.substring(boldCharCount);
      return (
        <>
          <span style={{ fontWeight: 'bold' }}>{boldSubString}</span>
          {trailingSubString}&nbsp;
        </>
      );
    });
  }

  const Component = React.useMemo(
    () => getTextElement(implementation),
    [implementation]
  );
  return (
    <Component
      {...rest}
      style={{ ...customStyles, fontFamily: fontInstance.family }}
    >
      {mutableAccessibleChildren ?? children}
    </Component>
  );
};

export default VarFont;
