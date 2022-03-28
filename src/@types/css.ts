import { Properties } from 'csstype';

export type WithCustomStyles<T> = T & {
    customStyles?: Properties;
};
