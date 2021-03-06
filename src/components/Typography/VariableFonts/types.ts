import { SafeReactFC, WithCustomStyles } from 'src/@types';
import fontblob from '../../../fontBlob.json';

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
  fontKey: keyof typeof fontblob;
  implementation: TextElementKeyType;
  accessiblility?: {
    bionic?: boolean;
  };
} & SafeReactFC<WithCustomStyles<{}>>;
