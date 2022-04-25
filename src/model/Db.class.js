
const mongoose = require('mongoose');

module.exports = class DB {
  name = 'dbPlugin';
  host = '127.0.0.1';
  port = '27017';
  dbname = 'digital-street';
  mongoose = null;
  constructor() {
    this.conn();
  }
  async conn() {
    await mongoose.connect(`mongodb://${this.host}:${this.port}/${this.dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.mongoose = mongoose;
  }
}