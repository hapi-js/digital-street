import { Plugin } from '../../core/Decorators';

@Plugin({
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
})
class DBPlugin { }

export default {
  plugin: new SwaggerPlugin()
}