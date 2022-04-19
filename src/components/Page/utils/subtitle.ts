// eslint-disable-next-line import/prefer-default-export
export function getSubtitleFontStyles(size: 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'sm':
      return {
        fontSize: 24,
        lineHeight: 1.15,
        fontWeight: 'normal'
      };
    case 'lg':
      return {
        fontSize: 40,
        lineHeight: 1.15,
        fontWeight: 'normal'
      };
    default:
      return {
        fontSize: 32,
        lineHeight: 1.15,
        fontWeight: 'normal'
      };
  }
}
