
import { Controller, Get } from '../core/controller.js';

@Controller('UsersController')
class UsersController {

  @Get('/users',{
    // payload:{}
  })
  static getUsers(req) {
    console.log(req.query);
    return 100;
  }
}

function validator(){}

export default {
  plugin: new UsersController(),
}