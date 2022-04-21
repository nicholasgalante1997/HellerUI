export const HellerVariant = {
  twilight: 'twilight',
  twilightGradient: 'twilight-gradient',
  roseGarden: 'rose-garden',
  roseGardenGradient: 'rose-garden-gradient'
} as const;

export type HellerVariantType = typeof HellerVariant;
export type HellerVariantKey = keyof HellerVariantType;
export type HellerVariantValue = typeof HellerVariant[HellerVariantKey];
