export type GoogleFontApiItem = {
    family: string;
    variants: string[];
    version: string;
    lastModified: string;
    category: string;
    [x: string]: any;
};

export type GoogleFontApiResponse = {
    kind: string;
    items: GoogleFontApiItem[];
};

export type GoogleFontFamily = string;
export type FontStyleVariant = string;
const GOOGLE_FONT_URL_BASE = 'https://fonts.googleapis.com/css2?family=' as const;

export interface IGoogleFontUrlBuilder {
    family: GoogleFontFamily;
    availableFontStyleVariants: FontStyleVariant[];
    meta: {
        version: string;
        lastModified: string;
        category: string;
    };
    build: () => string;
}

export class GoogleFontUrlBuilder implements IGoogleFontUrlBuilder {
    /**
     * @member {GoogleFontFamily} family
     */
    family: GoogleFontFamily;
    /**
     * @member {FontStyleVariant[]} availableFontStyleVariants
     */
    availableFontStyleVariants: FontStyleVariant[];
    /**
     * @member {Object} meta
     */
    meta: { lastModified: string; version: string; category: string; };

    constructor(
        family: GoogleFontFamily,
        availableFontStyleVariants: FontStyleVariant[],
        meta: { lastModified: string; version: string; category: string; }
    ) {
        this.family = family;
        this.availableFontStyleVariants = availableFontStyleVariants;
        this.meta = meta;
    }

    build(){ return GOOGLE_FONT_URL_BASE + this.family.replace(/ /g, '+') + '&display=swap' }
}