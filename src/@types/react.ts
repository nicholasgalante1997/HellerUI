import React from 'react';

export type SafeReactFC<T> = T & {
  children?: React.ReactNode | React.ReactNode[];
  [x: string]: any;
} & Partial<Pick<HTMLElement, 'id' | 'className'>>;
