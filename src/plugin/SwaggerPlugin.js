import { Plugin } from '../../core/decorators';
import HapiSwagger from 'hapi-swagger';
import config from '../../package.json';

@Plugin(async (server) => {
  await server.register({
    plugin: HapiSwagger,
    options: {
      basePath: '/',
      info: {
        title: '数字化街道社区工作平台',
        version: config.version,
      },
      auth: false,
      grouping: 'tags',
      tags: [
        { name: 'users', description: '用户管理' },
        { name: 'items', description: '选项管理' },
      ],
    }
  });
})
class SwaggerPlugin { }

export default {
  plugin: new SwaggerPlugin()
}