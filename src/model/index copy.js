
const mongoose = require('mongoose');
const { Schema } = mongoose;

exports.plugin = new class {
  name = 'indexModel';
  name = 'dbPlugin';
  host = '127.0.0.1';
  port = '27017';
  dbname = 'digital-street';
  async register(server) {
    await mongoose.connect(`mongodb://${this.host}:${this.port}/${this.dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    require('./usersModel');
  }
}


