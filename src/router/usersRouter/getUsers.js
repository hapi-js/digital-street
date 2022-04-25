
const Joi = require('joi');

// const Users = require('../../model/usersModel');

function test() { }
@test
class UsersController {
  path = '/users';
  method = 'GET';

  // 文档配置
  options = {
    tags: ['api', 'users'],
    description: 'My route description',
    notes: 'My route notes',
    // 参数验证
    validate: {
      query: Joi.object({
        foo: Joi.string().description('test'),
        bar: Joi.string(),
      })
    },
  };

  handler(req) {
    console.log(req.users);
    return { a: 1 };
  }
}


module.exports = UsersController