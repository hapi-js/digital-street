
class ModelDecorators {
  static pre = []
  static Model(options = {}) {
    return function (target) {
      target.prototype.plugin = {
        name: target.name,
        register(server) {
          const { mongoose } = server;
          const schema = new mongoose.Schema(options);
          schema.loadClass(target);
          if (ModelDecorators.pre.length > 0) {
            // 执行pre函数
            ModelDecorators.pre.forEach(([type, fn]) => schema.pre(type, fn));
          }
          const model = mongoose.model(target.name, schema)
          server.decorate('request', target.name, new model);
        }
      }
    }
  }
  static Pre(type) {
    return function (target, name, des) {
      ModelDecorators.pre.push([type, des.value])
    }
  }
}

export default ModelDecorators;