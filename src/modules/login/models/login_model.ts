import * as knex from 'knex';
export class LoginModel {
  create(db: knex, data: any) {
    return db('sd_users')
      .insert(data)
  }

  login(db: knex, username: any, password: any) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email', 'username', 'level')
      .where('username', username)
      .where('password', password)
  }
  resetPassword(db: knex, datareset: any) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email', 'username', 'level')
      .where('username', datareset)
      .orWhere('email', datareset)
  }
  read(db: knex) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email')
      .orderBy('user_id','desc')
      //.limit(3)
      // .offset(5)
      
  }

  search(db: knex, query: any) {
    const _query = '%' + query + '%'
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email')
      .where('first_name', 'like', _query)
      .orderBy('user_id')
  }

  update(db: knex, userId: any, data: any) {
    return db('sd_users')
      .where('user_id', userId)
      .update(data)
  }

  remove(db: knex, userId: any) {
    return db('sd_users')
      .where('user_id', userId)
      .del()
  }

  // Raw query
  rawQuery(db: knex, userId: any, firstName: any) {
    const sql = `
    SELECT user_id, first_name, last_name,email
    FROM users
    WHERE user_id=? AND first_name=?
    ORDER BY first_name DESC
    `
    return db.raw(sql, [userId, firstName])
  }

  whereRawQuery(db: knex) {
    return db('sd_users')
      .select('*')
      .whereRaw('group')
  }

}