import * as knex from 'knex';  // CRUD
export class UserModel {
  create(db1: knex, data: any) {
    return db1('sd_users')
      .insert(data)
  }

  login(db1: knex, username: any, password: any) {
    return db1('sd_users')
      .select('user_id', 'first_name', 'last_name')
      .where('username', username)
      .where('password', password)
  }

  read(db1: knex) {
    return db1('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email')
      .orderBy('user_id','desc')
      //.limit(3)
      // .offset(5)
      
  }

  search(db1: knex, query: any) {
    const _query = '%' + query + '%'
    return db1('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email')
      .where('first_name', 'like', _query)
      .orderBy('user_id')
  }

  update(db1: knex, userId: any, data: any) {
    return db1('sd_users')
      .where('user_id', userId)
      .update(data)
  }

  remove(db1: knex, userId: any) {
    return db1('sd_users')
      .where('user_id', userId)
      .del()
  }

  // Raw query
  rawQuery(db1: knex, userId: any, firstName: any) {
    const sql = `
    SELECT user_id, first_name, last_name,email
    FROM users
    WHERE user_id=? AND first_name=?
    ORDER BY first_name DESC
    `
    return db1.raw(sql, [userId, firstName])
  }

  whereRawQuery(db1: knex) {
    return db1('sd_users')
      .select('*')
      .whereRaw('group')
  }

}