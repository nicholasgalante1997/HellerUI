import { SafeReactFC, WithCustomStyles } from '../../../@types';

export type NativeParagraphProps = {
  color?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  thin?: boolean;
};

export type ParagraphProps = WithCustomStyles<
  SafeReactFC<NativeParagraphProps>
> & { dataTestId?: string };
