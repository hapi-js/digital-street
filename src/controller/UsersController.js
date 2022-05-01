import Joi from 'joi';
import { Controller, DELETE, GET, POST, PUT } from '../../core/decorators';
@Controller('/users', {
  tags: ['api', 'users'],
})
class UsersController {
  // 用户登陆
  @POST('/login', {
    notes: '用户登陆',
    description: '用户登陆',
    auth: false,
    plugins: {
      'hapi-swagger': {
        payloadType: 'form',
        produces: ['text/plain'],
      },
      rbac: 'none',
    },
    validate: {
      headers: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
      payload: Joi.object({
        username: Joi.string().required().trim()
          .description('用户名')
          .error(() => new Error('用户名必须填写')),
        password: Joi.string().required()
          .description('密码')
          .error(() => new Error('密码必须填写')),
      }),
    },
  })
  static login(req) {
    return req.payload
  }


  @GET('/ja', {
    description: '删除用户',
    notes: '删除用户',
    validate: {
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
  static async getUsers(req) {
    await req.UsersModel1.addUsers({
      username: 'jajja',
      age: 20,
      password: '123123',
      gender: 1,
    });
    return await req.UsersModel1.getUsers();
  }

  @POST('', {
    description: '添加用户',
    notes: '添加用户',
  })
  static getUsers1(req) {
    return { a: 2 }
  }
}

export default UsersController;