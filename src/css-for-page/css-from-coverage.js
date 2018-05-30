const CleanCSS = require('clean-css');

/**
 * Collects css from report for url with stylesheets
 * @param {String} url with stylesheets
 * @param {Array} ranges of CSS used on page
 * @param {String} text with CSS
 * @return {String}
 */
function cssFromSingleUrlCoverage({ url, ranges, text }) {
  if (url.toLowerCase().includes('.css')) {
    return ranges.reduce((css, { start, end }) => css + text.substring(start, end), '');
  }

  return text; // for CSS in <style> tag
}

/**
 * Collects and minimises all styles from coverage report for all urls with stylesheets
 * @param {Array} pageCoverage https://github.com/GoogleChrome/puppeteer/blob/v1.4.0/docs/api.md#coveragestopcsscoverage
 * @return {String}
 */
function cssFromCoverage(pageCoverage) {
  const allCSSOnPage = pageCoverage.map(cssFromSingleUrlCoverage).join('');

  return new CleanCSS().minify(allCSSOnPage).styles;
}

module.exports = cssFromCoverage;
