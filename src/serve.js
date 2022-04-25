const Hapi = require('@hapi/hapi');
// const UsersController = require('./controller/UsersController');

// console.log(Users.plugin.getUsers());

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // await server.register([
  //   UsersController,
  //   // require('./router'),
  //   // require('./plugin'),
  //   // require('./src/model'),
  // ]);

  server.route({
    path: '/users',
    method: 'get',
    handler() {
      return { a: 1 };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
