
import Hapi from '@hapi/hapi';
import inert from '@hapi/inert';
import vision from '@hapi/vision';

import controller from './controller';
import plugin from './plugin';
import model from './model';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register([
    inert,
    vision,
    ...controller,
    ...plugin,
    ...model,
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
