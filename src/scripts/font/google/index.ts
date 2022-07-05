const dotenv = require('dotenv');
const scraper = require('./scrape');

dotenv.config();

async function run() {
    await scraper.scrapeGoogleFontList();
}

run();