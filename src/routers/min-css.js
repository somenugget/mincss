const Router = require('koa-router');
const cssForPage = require('../css-for-page');
const validateUrl = require('../utils/validateUrl');

const router = new Router();

const validateParams = (ctx, next) => {
  const { urls } = ctx.request.body;
  const errors = {};

  if (!Array.isArray(urls)) {
    errors.base = 'Request must be an object with structure "{ "urls": ["http://url1.com", "https://url2.com"] }"';
    ctx.body = { errors };
    return;
  }

  errors.urls = urls.map(url => (!validateUrl(url) ? 'Invalid url' : null));

  if (errors.urls.some(error => error)) {
    ctx.body = { errors };
    return;
  }

  return next(); // eslint-disable-line consistent-return
};

const route = async (ctx) => {
  const { urls } = ctx.request.body;

  const minifiedCSS = await Promise.all(urls.map(url => cssForPage(url)));
  ctx.body = urls.reduce((object, url, key) => ({
    ...object,
    [url]: minifiedCSS[key]
  }), {});
};

router.post('/', validateParams, route);

module.exports = router;
