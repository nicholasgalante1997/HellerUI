export const ShadowStyles = {
  sharp: 'sharp',
  blur: 'blur',
  ghost: 'ghost'
} as const;

export const baseShadowHex = 'rgba(0, 0, 0, 0.8)';

export type HellerShadowStylesType = typeof ShadowStyles;
export type HellerShadowKey = keyof HellerShadowStylesType;
export type HellerShadowValue = typeof ShadowStyles[HellerShadowKey];
