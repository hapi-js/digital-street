function Plugin(name) {
  return function (target) {
    target.prototype.name = name;
    target.prototype.register = function (server) {
      server.route([])
    }
  }
}

function Get(path) {
  return function (target, name, desc) {
    console.log(target, name, desc);
  }
}
@Plugin('UsersController')
class UsersController {
  @Get('/users')
  static getUsers() {
    return 100;
  }
}

exports.plugin = new UsersController();