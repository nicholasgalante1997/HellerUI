import { SafeReactFC, WithCustomStyles } from '../../../@types';

export interface StyledHeaderProps {
  color?: string;
  scale?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
}

export interface NativeHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  dataTestId?: string;
}

export type HeadingProps = WithCustomStyles<
  SafeReactFC<NativeHeadingProps & StyledHeaderProps>
>;
