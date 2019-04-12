const Model = require('../mocks/article/list');
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
          const user = await this.app.mysql.get('user', { id: 1 });
console.log(user)
console.log(11111111111111)
const { ctx } = this;
      await ctx.render('app.js', { url: ctx.url });
    }

    async list() {
      const { ctx } = this;
      await ctx.render('list.js', Model.getPage(1, 10));
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('list.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;

          const user = await this.app.mysql.get('user', { id: 1 });
console.log(user)
console.log(11111111111111)
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};