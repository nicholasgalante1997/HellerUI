import React from 'react';
import { useExtraneousFont } from '../../../utils/font/loader';
import { fontMap } from '../../..//globals/fonts';
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
  const fontData = React.useMemo(() => fontMap[fontKey], [fontKey]);

  const { fontFamilyBase, fontWeights, gUrl } = fontData;
  const { ready, failed, loading } = useExtraneousFont(gUrl);

  if (failed || loading) {
    <Loader />;
  }

  const Component = React.useMemo(
    () => getTextElement(implementation),
    [implementation]
  );
  return (
    <Component style={{ ...customStyles, fontFamily: fontFamilyBase }}>
      {children}
    </Component>
  );
};

export default VarFont;
