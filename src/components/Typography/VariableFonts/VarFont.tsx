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
    weight = 500
  } = props;
  const fontData = React.useMemo(() => fontBlob[fontKey], [fontKey]);
  const fontInstance = new GoogleFontUrlBuilder(fontData.family, fontData.availableFontStyleVariants, fontData.meta)
  const { ready, failed, loading } = useExtraneousFont(fontInstance.build());

   console.log(Object.keys(fontBlob))

  if (failed || loading) {
    <Loader />;
  }

  const Component = React.useMemo(
    () => getTextElement(implementation),
    [implementation]
  );
  return (
    <Component style={{ ...customStyles, fontFamily: fontInstance.family }}>
      {children}
    </Component>
  );
};

export default VarFont;
