exports.plugin = new class {
  name = 'IndexRouter';
  register(server) {
    server.route([
      ...require('./usersRouter'),
    ]);
  }
}