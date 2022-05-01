import md5 from 'md5';
import { Model, Pre } from '../../core/decorators';

@Model({
  username: String,
  age: Number,
  phone: String,
  email: String,
  password: String,
  gender: String,
  group: {
    type: Array,
    default: [],
  },
  avatar: {
    type: String,
    default: '',
  },
  ctime: {
    type: Date,
    default: Date.now,
  },
})
class UsersModel {

  @Pre('save')
  md5password(next) {
    this.password = md5(this.password);
    next();
  }

  // 设置用户权限
  setGroup(_id, group) {
    return this.model('UsersModel').updateOne({ _id }, { group });
  }
  // 修改当前登陆用户密码
  editPassword(_id, oldPassword, newPassword) {
    return this.model('UsersModel').findOneAndUpdate({ _id, password: oldPassword }, {
      password: newPassword,
    });
  }
  // 更新用户的头像
  editAvatar(_id, data) {
    return this.model('UsersModel').findOneAndUpdate({ _id }, data);
  }
  // 用户登陆
  login(username, password) {
    return this.model('UsersModel').findOne({ username, password }, { password: 0, __v: 0 });
  }
  // 获取用户总数，不包含root用户
  getUsersCount(data) {
    const where = {
      username: { $ne: 'root' },
    };
    if (data.searchField) {
      where[data.searchField] = { $regex: new RegExp(`.*${data.searchValue}.*`, 'i') };
    }
    const r = this.model('UsersModel').where(where).countDocuments();
    return r;
  }
  // 获取用户，不包含root用户
  getUsers({
    page, perPage, searchField, searchValue,
  } = { page: 1, perPage: 10 }) {
    const conditions = { username: { $ne: 'root' } };
    if (searchField && searchValue) {
      conditions[searchField] = { $regex: new RegExp(`.*${searchValue}.*`, 'i') };
    }
    return this.model('UsersModel').find(conditions, { __v: 0 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ ctime: -1 });
  }
  // 添加用户
  addUsers(data) {
    return this.model('UsersModel').create(data);
  }
  // 根据ID获取单个用户信息
  getUserById(_id) {
    return this.model('UsersModel').findById(_id, { password: 0, __v: 0 });
  }
  // 根据ID删除用户
  deleteUserById(_id) {
    return this.model('UsersModel').deleteOne({ _id });
  }
  // 根据多个ID批量删除用户
  deleteUsersByIds(ids) {
    return this.model('UsersModel').deleteMany({ _id: { $in: ids } });
  }
  // 根据ID更新用户信息
  updateUserById(_id, data) {
    return this.model('UsersModel').updateOne({ _id }, data);
  }
  // 判断字段值是否存在
  isExist(field, value) {
    return this.model('UsersModel').findOne({ [field]: value });
  }
}

export default new UsersModel;