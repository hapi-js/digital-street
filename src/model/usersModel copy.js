const DB = require('./Db.class')

module.exports = class UsersModel extends DB {
  username = String;
  age = Number;
  phone = String;
  email = String;
  password = String;
  gender = String;
  group = {
    type: Array,
    default: [],
  };
  avatar = {
    type: String,
    default: '',
  };
  ctime = {
    type: Date,
    default: Date.now,
  };

  constructor() {
    super();
    console.log(this.mongoose);
  }

  static setGroup(_id, group) {
    return this.model('users').updateOne({ _id }, { group });
  }
  // 修改当前登陆用户密码
  static editPassword(_id, oldPassword, newPassword) {
    return this.model('users').findOneAndUpdate({ _id, password: oldPassword }, {
      password: newPassword,
    });
  }
  // 更新用户的头像
  static editAvatar(_id, data) {
    return this.model('users').findOneAndUpdate({ _id }, data);
  }
  // 用户登陆
  static login(username, password) {
    return this.model('users').findOne({ username, password }, { password: 0, __v: 0 });
  }
  // 获取用户总数，不包含root用户
  static getUsersCount(data) {
    const where = {
      username: { $ne: 'root' },
    };
    if (data.searchField) {
      where[data.searchField] = { $regex: new RegExp(`.*${data.searchValue}.*`, 'i') };
    }
    const r = this.model('users').where(where).countDocuments();
    return r;
  }
  // 获取用户，不包含root用户
  static getUsers({
    page, perPage, searchField, searchValue,
  } = { page: 1, perPage: 10 }) {
    const conditions = { username: { $ne: 'root' } };
    if (searchField && searchValue) {
      conditions[searchField] = { $regex: new RegExp(`.*${searchValue}.*`, 'i') };
    }
    return this.model('users').find(conditions, { password: 0, __v: 0 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ ctime: -1 });
  }
  // 添加用户
  static addUsers(data) {
    return this.model('users').create(data);
  }
  // 根据ID获取单个用户信息
  static getUserById(_id) {
    return this.model('users').findById(_id, { password: 0, __v: 0 });
  }
  // 根据ID删除用户
  static deleteUserById(_id) {
    return this.model('users').deleteOne({ _id });
  }
  // 根据多个ID批量删除用户
  static deleteUsersByIds(ids) {
    return this.model('users').deleteMany({ _id: { $in: ids } });
  }
  // 根据ID更新用户信息
  static updateUserById(_id, data) {
    return this.model('users').updateOne({ _id }, data);
  }
  // 判断字段值是否存在
  static isExist(field, value) {
    return this.model('users').findOne({ [field]: value });
  }

}