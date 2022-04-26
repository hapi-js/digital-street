import { Plugin } from '../../core/Decorators';
import HapiSwagger from 'hapi-swagger';

@Plugin(async (server) => {
  await server.register({
    plugin: HapiSwagger,
    options: {
      basePath: '/',
      info: {
        title: '数字化街道社区工作平台',
        version: '1.0.0',
      },
      auth: false,
      grouping: 'tags',
      tags: [
        { name: 'users', description: '用户管理' },
      ],
    }
  });
})
class SwaggerPlugin { }

export default {
  plugin: new SwaggerPlugin()
}