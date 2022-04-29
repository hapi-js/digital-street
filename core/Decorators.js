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

export function Plugin() {
  return function (target) {
    target.prototype.name = target.name;
    target.prototype.register = (server) => {
      console.log(server.mongoose);
    };
  }
}

// export function schema() {
//   return function (target) {
//     target.prototype.name = target.name;
//     target.prototype.register = register;
//     console.log(target);
//   }
// }