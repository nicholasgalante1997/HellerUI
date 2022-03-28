import { SafeReactFC, WithCustomStyles } from '../../../@types';

export type NativeParagraphProps = {
    color?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
};

export type ParagraphProps = WithCustomStyles<SafeReactFC<NativeParagraphProps>>;
