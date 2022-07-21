const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
require('isomorphic-fetch');

dotenv.config();

/** types */
interface IGoogleFontUrlBuilder {
  family: GoogleFontFamily;
  safeSpaceFamily: string;
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
const GOOGLE_FONT_URL_BASE =
  'https://fonts.googleapis.com/css2?family=' as const;

class GoogleFontUrlBuilder implements IGoogleFontUrlBuilder {
  /**
   * @member {GoogleFontFamily} family
   */
  family: GoogleFontFamily;
  /**
   * @member {GoogleFontFamily} family
   */
  safeSpaceFamily: string;
  /**
   * @member {FontStyleVariant[]} availableFontStyleVariants
   */
  availableFontStyleVariants: FontStyleVariant[];
  /**
   * @member {Object} meta
   */
  meta: { lastModified: string; version: string; category: string };

  constructor(
    family: GoogleFontFamily,
    availableFontStyleVariants: FontStyleVariant[],
    safeSpaceFamily: GoogleFontFamily,
    meta: { lastModified: string; version: string; category: string }
  ) {
    this.family = family;
    this.safeSpaceFamily = safeSpaceFamily;
    this.availableFontStyleVariants = availableFontStyleVariants;
    this.meta = meta;
  }

  build() {
    return GOOGLE_FONT_URL_BASE + this.safeSpaceFamily;
  }
}

/** utils */
async function scrapeGoogleFontList() {
  try {
    const rawFontData = await fetch(
      'https://www.googleapis.com/webfonts/v1/webfonts?key=' +
        process.env.GOOGLE_FONTS_API_KEY
    );
    const fontData = (await rawFontData.json()) as GoogleFontApiResponse;
    const { items } = fontData;
    return items;
  } catch (e: any) {
    console.error('[scrapeGoogleFontList](ERROR):::' + (e as Error).message);
  }
}

function transformGoogleFontResponse(arr: GoogleFontApiItem[]) {
  const dto = {};
  arr.forEach((gfont) => {
    /** NOTE: this is a stopgap because I've hit a vicious bug in regards to spaces in family names
     * i think its in relation to the font url hashing
     * to be continued tho
     */
    if (!gfont.family.includes(' ')) {
      Object.assign(dto, {
        [gfont.family + ' - ' + gfont.version]: new GoogleFontUrlBuilder(
          gfont.family,
          gfont.variants,
          gfont.family.replace(/\s/g, '+'),
          {
            version: gfont.version,
            category: gfont.category,
            lastModified: gfont.lastModified
          }
        )
      });
    }
  });
  return dto;
}

function cleanJSONBlob() {
  console.log('beginning cleaning operations \n');
  let succeeded = true;
  const filepath = path.resolve(process.cwd(), 'src', 'fontBlob.json');
  try {
    console.log(`attempting to clean path ${filepath}`);
    fs.rmSync(filepath);
  } catch (e: any) {
    console.error((e as Error).message);
    succeeded = false;
  } finally {
    console.log(
      'operation complete - status of cleaning operation\nWas file deleted? ' +
        succeeded
    );
    return succeeded;
  }
}

function writeOutFontBlob(o: Object) {
  console.log('beginning writing operations');
  let succeeded = true;
  try {
    const filename = path.resolve(process.cwd(), 'src', 'fontBlob.json');
    console.log('writing out to ' + filename);
    fs.writeFileSync(filename, Buffer.from(JSON.stringify(o), 'utf-8'), {
      encoding: 'utf-8'
    });
  } catch (e: any) {
    console.error((e as Error).message);
    succeeded = false;
  } finally {
    console.log(
      'operation complete - status of writing operation\nWas file created? ' +
        succeeded
    );
    return succeeded;
  }
}

async function run() {
  let succeeded = true;
  try {
    console.log(
      'beinning `run()` invocation in /src/scripts/font/google/index.ts'
    );
    console.log('beginning scraping...');
    const fontArray = await scrapeGoogleFontList();
    if (!Array.isArray(fontArray)) {
      throw new Error('failed at font list scrape');
    }
    console.log('scraping complete!');
    console.log('Beginning transformation of font objects...');
    const dto = transformGoogleFontResponse(fontArray);
    console.log('transformation complete!');
    cleanJSONBlob();
    writeOutFontBlob(dto);
  } catch (e: any) {
    console.warn((e as Error).message);
    succeeded = false;
  } finally {
    console.log(
      'run() invocation complete - status of run fn call stack\nWas run successful? ' +
        succeeded
    );
  }
}

run();
