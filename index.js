const runPages = require('./runPages');
const fetchStylesFromPage = require('./fetchStylesFromPage');

(async () => {
  const styles = await Promise.all(runPages(['https://codeguida.com/'], fetchStylesFromPage));
})();
