// 控制器路由装饰器
class ControllerDecorators {
  static routes = [];
  static Controller(path = '', config) {
    return function (target) {
      target.plugin = {
        name: target.name,
        register(server) {
          // 全局选项合并
          ControllerDecorators.routes.forEach(el => {
            el.config.tags = config.tags;
            if (path) el.path = path + el.path;
          })
          server.route(ControllerDecorators.routes);
        }
      };
    }
  }

  // 创建路由
  static createRoute(path, method, config, handler) {
    return ControllerDecorators.routes.push({
      path,
      method,
      config,
      handler
    });
  }

  // 创建GET路由
  static GET(path = '/', config = {}) {
    return function (target, name, desc) {
      ControllerDecorators.createRoute(path, 'GET', config, desc.value)
    }
  }

  // 创建POST路由
  static POST(path = '/', config = {}) {
    return function (target, name, desc) {
      ControllerDecorators.createRoute(path, 'POST', config, desc.value)
    }
  }

  // 创建PUT路由
  static PUT(path = '/', config = {}) {
    return function (target, name, desc) {
      ControllerDecorators.createRoute(path, 'PUT', config, desc.value)
    }
  }

  // 创建DElETE路由
  static DELETE(path = '/', config = {}) {
    return function (target, name, desc) {
      ControllerDecorators.createRoute(path, 'DELETE', config, desc.value)
    }
  }
}

export default ControllerDecorators;