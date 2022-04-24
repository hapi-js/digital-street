
const { version } = require('../../../package.json');

exports.plugin = new class {
  name = 'swaggerPlugin';
  options = {
    basePath: '/',
    info: {
      title: '数字化街道社区工作平台',
      version,
    },
    auth: false,
    grouping: 'tags',
    tags: [
      { name: 'users', description: '用户管理' },
    ],
  };
  async register(server) {
    await server.register([
      require('@hapi/inert'),
      require('@hapi/vision'),
      {
        plugin: require('hapi-swagger'),
        options: this.options,
      },
    ]);
  }
}