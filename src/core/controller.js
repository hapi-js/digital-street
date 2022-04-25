export function Controller(name) {
    return function (target) {
        target.prototype.name = name;
    }
}

export function Get(path,config={}) {
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