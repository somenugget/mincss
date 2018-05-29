const get = require('./get');

async function fetchStylesFromPage(page) {
  const styles = await page.evaluate(() =>
    /* eslint-env browser */
    Promise.resolve({
      link: Array
        .from(document.getElementsByTagName('link'))
        .map(link => link.href)
        .filter(href => href.includes('.css')),
      style: Array
        .from(document.getElementsByTagName('style'))
        .map(style => style.innerText),
    }));

  styles.link = styles.link.map(async url => get(url));

  return styles;
}

module.exports = fetchStylesFromPage;
