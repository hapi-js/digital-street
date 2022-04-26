export function Controller() {
  return function (target) {
    target.prototype.name = target.name;
  }
}

export function Query(target) {
  console.log(target);
}

export function Get(path, config = {}) {
  return function (target, name, desc) {
    target.prototype.register = function (server) {
      server.route({
        path,
        method: 'GET',
        config,
        handler: desc.value
      })
    }
  }
}

export function Plugin(register) {
  return function (target) {
    target.prototype.name = target.name;
    target.prototype.register = register;
    // target.prototype.register = async function (server) {
    //   // await server.register([
    //   //   {
    //   //     plugin: require('hapi-swagger'),
    //   //     options,
    //   //   },
    //   // ]);
    // }
  }
}
