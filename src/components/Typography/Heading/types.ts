import { Properties } from 'csstype';
import { SafeReactFC } from '../../../utils';

export interface StyledHeaderProps {
    color?: string;
    scale?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
}

export interface NativeHeadingProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    customStyles?: Properties;
}

export type HeadingProps = SafeReactFC<NativeHeadingProps & StyledHeaderProps>;
