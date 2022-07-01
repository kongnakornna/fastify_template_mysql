import * as knex from 'knex';
export class DemoModel {
  create(db: knex, data: any) {
    return db('sd_users')
      .insert(data)
  }
  test(db: knex) {
        return db('sd_sd_users as u')
            .join('profile as p', 'u.user_id', 'p.user_id')
            // .select('u.*')
            .select('u.user_id', 'u.firstname', 'u.last_name', 'u.email', 'u.date')
            .select('p.email as mail')
            // .where('users.user_id!=','')
            .orderBy('u.user_id', 'desc')
            .limit(3)
            .offset(5)
    }
  login(db: knex, username: any, password: any) {
    return db('sd_users')
      .select('user_id', 'firstname', 'last_name')
      .where('username', username)
      .where('password', password)
  }

  read(db: knex) {
    return db('sd_users')
      .select('user_id', 'firstname', 'last_name', 'email')
      .orderBy('user_id','desc')
      //.limit(3)
      // .offset(5)
      
  }

  search(db: knex, query: any) {
    const _query = '%' + query + '%'
    return db('sd_users')
      .select('user_id', 'firstname', 'last_name', 'email')
      .where('firstname', 'like', _query)
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
    SELECT user_id, firstname, last_name,email
    FROM users
    WHERE user_id=? AND firstname=?
    ORDER BY firstname DESC
    `
    return db.raw(sql, [userId, firstName])
  }

  whereRawQuery(db: knex) {
    return db('sd_users')
      .select('*')
      .whereRaw('group')
  }

}