require('isomorphic-fetch');

async function scrapeGoogleFontList(){
    const p = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + process.env.GOOGLE_FONTS_API_KEY);
    const r = await p.json();
    console.warn(JSON.stringify(r['items'][0]));
}

module.exports = {
    scrapeGoogleFontList
};