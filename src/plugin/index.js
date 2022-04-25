exports.plugin = new class {
  name = 'IndexPlugin';
  async register(server) {
    await server.register([
      require('./swaggerPlugin'),
      // require('./dbPlugin'),
    ]);
  }
}