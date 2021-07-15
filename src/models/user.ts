import * as knex from 'knex';

export class UserModel {

  create(db: knex, data: any) {
    return db('users')
      .insert(data)
  }

  login(db: knex, username: any, password: any) {
    return db('users')
      .select('user_id', 'first_name', 'last_name')
      .where('username', username)
      .where('password', password)
  }

  read(db: knex) {
    return db('users')
      .select('user_id', 'first_name', 'last_name')
      .orderBy('first_name')
  }

  search(db: knex, query: any) {
    const _query = '%' + query + '%'
    return db('users')
      .select('user_id', 'first_name', 'last_name')
      .where('first_name', 'like', _query)
      .orderBy('first_name')
  }

  update(db: knex, userId: any, data: any) {
    return db('users')
      .where('user_id', userId)
      .update(data)
  }

  remove(db: knex, userId: any) {
    return db('users')
      .where('user_id', userId)
      .del()
  }

  // Raw query
  rawQuery(db: knex, userId: any, firstName: any) {
    const sql = `
    SELECT user_id, first_name, last_name
    FROM users
    WHERE user_id=? AND first_name=?
    ORDER BY first_name DESC
    `
    return db.raw(sql, [userId, firstName])
  }

  whereRawQuery(db: knex) {
    return db('users')
      .select('*')
      .whereRaw('group')
  }

}