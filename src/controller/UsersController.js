import Joi from 'joi';

import { Controller, Get } from '../../core/decorators.js';

@Controller()
class UsersController {
  @Get('/users',
    {
      tags: ['api', 'users'],
      description: '用户管理',
      notes: 'My route notes',
      // 参数验证
      validate: {
        // headers,
        query: Joi.object({
          page: Joi.number().integer().min(1).default(1)
            .description('页码：默认第1页，最小值为1')
            .error(() => new Error('页码：默认第1页，最小值为1')),
          perPage: Joi.number().integer().min(1).default(10)
            .description('每页的记录数：默认10条，最小值为1')
            .error(() => new Error('每页的记录数：默认10条，最小值为1')),
          searchField: Joi.string().allow('phone', 'email', 'username')
            .default('')
            .description('要搜索的字段')
            .error(() => new Error('请填写要搜索的字段')),
          searchValue: Joi.string().default('')
            .description('要搜索的内容')
            .error(() => new Error('请填写要搜索的内容')),
        }),
      },
    })
  static getUsers(req) {
    console.log(req.query);
    return 100;
  }
}

function validator() { }

export default {
  plugin: new UsersController(),
}