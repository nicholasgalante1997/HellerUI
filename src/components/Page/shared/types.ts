import { SafeReactFC, WithCustomStyles } from '../../../@types';

export type NativeHellerSectionProps = {
    id?: string;
    padding?: string | number;
    margin?: string | number;
    justifyContent?: 'center' | 'flex-start';
};

export type HellerDividerProps = {
    fadeColor: string;
    focusColor: string;
};

export type HellerSectionProps = SafeReactFC<WithCustomStyles<NativeHellerSectionProps>>;
