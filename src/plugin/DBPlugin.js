const mongoose = require('mongoose');
import { Plugin } from '../../core/Decorators';

@Plugin(async (server) => {
  const host = '127.0.0.1';
  const port = 27017;
  const dbname = 'digital-street';
  await mongoose.connect(`mongodb://${host}:${port}/${dbname}`);
  server.decorate('server', 'mongoose', mongoose);
})
class DBPlugin { }

export default {
  plugin: new DBPlugin()
}