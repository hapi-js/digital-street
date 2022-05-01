
class PluginDecorators {
  static Plugin(register = function () { }) {
    return function (target) {
      target.prototype.plugin = {
        name: target.name,
        register,
      }
    }
  }
}

export default PluginDecorators;