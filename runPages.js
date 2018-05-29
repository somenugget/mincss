const puppeteer = require('puppeteer');

async function runPage(url, callback) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const page = await browser.newPage();

  await page.goto(url);

  const result = await callback(page);

  await browser.close();

  return result;
}

function runPages(urls, callback) {
  return urls.map(url => runPage(url, callback));
}

module.exports = runPages;
