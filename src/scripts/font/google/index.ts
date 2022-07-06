const fs = require('fs');
const dotenv = require('dotenv');
require('isomorphic-fetch');

dotenv.config();

/** types */
interface IGoogleFontUrlBuilder {
    family: GoogleFontFamily;
    availableFontStyleVariants: FontStyleVariant[];
    meta: {
        version: string;
        lastModified: string;
        category: string;
    };
    build: () => string;
}

type GoogleFontApiItem = {
    family: string;
    variants: string[];
    version: string;
    lastModified: string;
    category: string;
    [x: string]: any;
};

type GoogleFontApiResponse = {
    kind: string;
    items: GoogleFontApiItem[];
};

type GoogleFontFamily = string;
type FontStyleVariant = string;
const GOOGLE_FONT_URL_BASE = 'https://fonts.googleapis.com/css2?family=' as const;

class GoogleFontUrlBuilder implements IGoogleFontUrlBuilder {
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

    build(){ return GOOGLE_FONT_URL_BASE + this.family }
}

/** utils */
async function scrapeGoogleFontList() {
    try {
        const rawFontData = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + process.env.GOOGLE_FONTS_API_KEY);
        const fontData = await rawFontData.json() as GoogleFontApiResponse;
        const { items } = fontData;
        return items;
    } catch (e: any) {
        console.error('[scrapeGoogleFontList](ERROR):::' + (e as Error).message);
    }
}

function transformGoogleFontResponse(arr: GoogleFontApiItem[]) {
    const dto = {};
    arr.forEach(gfont => {
        Object.assign(
            dto,
            {
                [gfont.family.replace(/\s/, '+') + '---' + gfont.version]: new GoogleFontUrlBuilder(
                    gfont.family,
                    gfont.variants,
                    {
                        version: gfont.version,
                        category: gfont.category,
                        lastModified: gfont.lastModified
                    }
                )
            }
        )
    })
    return dto;
}

function cleanJSONBlob(){
    let succeeded = true;
    try {
        fs.rmSync('fontBlob.json');
    } catch (e: any) { 
        console.error((e as Error).message);
        succeeded = false;
    } finally {
        return succeeded;
    }
}

function writeOutFontBlob(o: Object){
    fs.writeFileSync('fontBlob.json', new Buffer(JSON.stringify(o), 'utf-8'), { encoding: 'utf-8' });
}

async function run() {
    try {
        const fontArray = await scrapeGoogleFontList();
        if (!Array.isArray(fontArray)) { throw new Error('failed at font list scrape') }
        const dto = transformGoogleFontResponse(fontArray);
        cleanJSONBlob();
        writeOutFontBlob(dto);
    } catch (e: any) {
        console.warn((e as Error).message)
    }
    
}

run();