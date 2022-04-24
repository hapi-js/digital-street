exports.plugin = new class {
  name = 'IndexRouter';
  async register(server) {
    await server.route([
      ...require('./usersRouter'),
    ]);
  }
}