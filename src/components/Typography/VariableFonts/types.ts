import { SafeReactFC, WithCustomStyles } from 'src/@types';
import { fontMap } from 'src/globals/fonts';

export type TextElementKeyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'i'
  | 'b'
  | 'code';

export type VarFontProps = {
  fontKey: keyof typeof fontMap;
  implementation: TextElementKeyType;
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
} & SafeReactFC<WithCustomStyles<{}>>;
