import { Controller, DELETE, GET, PUT } from '../../core/decorators';
@Controller('/items', {
  tags: ['api', 'items'],
})
class ItemsController {
  @DELETE('/c', {
    description: '删除用户',
    notes: '删除用户',
  })
  static getUsers(req) {
    return { a: 1 }
  }

  @PUT('/d', {
    description: '修改用户',
    notes: '修改用户',
  })
  static getUsers1(req) {
    return { a: 2 }
  }
}

export default ItemsController;