const Joi = require('joi');

module.exports = new class {
  path = '/foobar/test';
  method = 'GET';
  options = {
    tags: ['api', 'users'],
    description: 'My route description',
    notes: 'My route notes',
    validate: {
      query: Joi.object({
        foo: Joi.string().description('test'),
        bar: Joi.string(),
      })
    },
  };

  handler() {
    return { a: 1 };
  }

}