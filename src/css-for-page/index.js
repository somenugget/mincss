const pageCoverage = require('./page-coverage');
const cssFromCoverage = require('./css-from-coverage');

async function index(url) {
  return cssFromCoverage(await pageCoverage(url));
}

module.exports = index;
