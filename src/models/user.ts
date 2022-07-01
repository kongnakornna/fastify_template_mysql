import * as knex from 'knex';

export class UserModel {

  create(db1: knex, data: any) {
    return db1('users')
      .insert(data)
  }

  login(db1: knex, username: any, password: any) {
    return db1('users')
      .select('user_id', 'firstname', 'last_name')
      .where('username', username)
      .where('password', password)
  }

  read(db1: knex) {
    return db1('users')
      .select('user_id', 'firstname', 'last_name')
      .orderBy('firstname')
  }

  search(db1: knex, query: any) {
    const _query = '%' + query + '%'
    return db1('users')
      .select('user_id', 'firstname', 'last_name')
      .where('firstname', 'like', _query)
      .orderBy('firstname')
  }

  update(db1: knex, userId: any, data: any) {
    return db1('users')
      .where('user_id', userId)
      .update(data)
  }

  remove(db1: knex, userId: any) {
    return db1('users')
      .where('user_id', userId)
      .del()
  }

  // Raw query
  rawQuery(db1: knex, userId: any, firstName: any) {
    const sql = `
    SELECT user_id, firstname, last_name
    FROM users
    WHERE user_id=? AND firstname=?
    ORDER BY firstname DESC
    `
    return db1.raw(sql, [userId, firstName])
  }

  whereRawQuery(db1: knex) {
    return db1('users')
      .select('*')
      .whereRaw('group')
  }

}