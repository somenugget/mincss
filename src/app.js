const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const minCss = require('./routers/min-css');

const app = new Koa();

app.use(bodyParser());

app.use(minCss.routes());

module.exports = {
  run: () => {
    app.listen(3000);
    console.log('Listening on port 3000'); // eslint-disable-line no-console
  }
};
