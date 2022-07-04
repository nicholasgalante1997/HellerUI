export const fontMap = {
  rokkit: {
    gUrl: 'https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap',
    fontFamilyBase: "'Rokkitt', serif",
    fontWeights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    _meta: null,
  },
  sanchez: {
    gUrl: "https://fonts.googleapis.com/css2?family=Sanchez:ital@0;1&display=swap",
    fontFamilyBase: "'Sanchez', serif",
    fontWeights: ['400'],
    _meta: {
      italic: true
    }
  }
} as const;

const _preconnect_static = {
  preconnect: [
    {
      href: 'https://fonts.googleapis.com',
      crossOrigin: false
    },
    {
      href: 'https://fonts.gstatic.com',
      crossOrigin: true
    }
  ]
};
