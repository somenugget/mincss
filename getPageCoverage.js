const puppeteer = require('puppeteer');

/**
 * Collects information about CSS used on page
 * @param {String} url to get coverage
 * @return {Promise<void>}
 */
async function getPageCoverage(url) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });

  const page = await browser.newPage();

  await page.coverage.startCSSCoverage();

  await page.goto(url);

  const coverage = await page.coverage.stopCSSCoverage();

  await browser.close();

  return coverage;
}

module.exports = getPageCoverage;
