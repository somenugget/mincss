const getPageCoverage = require('./getPageCoverage');
const getCSSFromCoverage = require('./getCSSFromCoverage');

async function getCSSForPage(url) {
  return getCSSFromCoverage(await getPageCoverage(url));
}

module.exports = getCSSForPage;
