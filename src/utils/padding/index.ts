/* eslint-disable import/prefer-default-export */
const scaleObject = {
  0: '0rem',
  1: '0.5rem',
  2: '1rem',
  3: '1.5rem',
  4: '2rem'
} as const;

export function getPadding(s: 0 | 1 | 2 | 3 | 4) {
  return scaleObject[s];
}
