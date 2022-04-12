import React from 'react';

export type SafeReactFC<T, E = HTMLElement> = T & {
    children?: React.ReactNode | React.ReactNode[];
    ref?: React.MutableRefObject<E> | React.RefObject<E>;
};
