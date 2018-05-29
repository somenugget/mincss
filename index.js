const getCSSForPage = require('./getCSSForPage');

const pages = ['https://prettier.io/', 'https://codeguida.com/'];

pages.forEach(async (url) => {
  console.warn(await getCSSForPage(url));
});
