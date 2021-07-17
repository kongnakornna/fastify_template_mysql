import * as knex from 'knex';
/**************************************************/    
export class GeoModel {
create(db: knex, data: any) {
    return db('sd_users')
      .insert(data)
  }
lastidread(db: knex) {
    return db('sd_users')
      .select('user_id')
      .orderBy('user_id','desc')
  }
 updateuid(db: knex, userId: any, data: any) {
    return db('sd_users')
      .where('user_id', userId)
      .update(data)
  }
 validation_email(db: knex, email: any) {
    return db('sd_users')
      .select('email')
      .where('email', email)
    }
 validation_username(db: knex, username: any) {
    return db('sd_users')
      .select('username')
      .where('username', username)
    }
 validation_network_id(db: knex, network_id: any) {
    return db('sd_users')
      .select('network_id')
      .where('network_id', network_id)
    }

    where_profile_id(db: knex, profile_id: any) {
        return db('sd_users')
            .select('user_id', 'first_name', 'last_name', 'email')
            .select('username', 'level', 'status', 'network_id')
            .select('date')
        .where('profile_id', profile_id)
    }
    where_user_update_password(db: knex, username: any, data: any) {
        return db('sd_users')
        .where('username', username)
        .update(data)
    }
    where_profile_id_update(db: knex, profile_id: any, data: any) {
        return db('sd_users')
        .where('profile_id', profile_id)
        .update(data)
    }
    where_profile_id_remove(db: knex, profile_id: any) {
        return db('sd_users')
        .where('profile_id', profile_id)
        .del()
    }
  profile(db: knex, user_id: any) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email', 'username', 'level', 'status', 'network_id')
      .where('user_id', user_id)
   }
  login(db: knex, username: any, password: any) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name', 'email', 'username', 'level')
      .where('username', username)
      .where('password', password)
      .where('status', 1)
  }
  resetPassword(db: knex, datareset: any) {
    return db('sd_users')
      .select('user_id', 'first_name', 'last_name')
      .select('email', 'username', 'level')
      .where('username', datareset)
      .orWhere('email', datareset)
    }
  resetpwd(db: knex, datareset: any) {
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

   test(db: knex) {
        return db('sd_users as u')
            .join('profile as p', 'u.user_id', 'p.user_id')
            // .select('u.*')
            .select('u.user_id', 'u.first_name', 'u.last_name', 'u.email', 'u.date')
            .select('p.email as mail')
            // .where('users.user_id!=','')
            .orderBy('u.user_id', 'desc')
            .limit(3)
            .offset(5)
    }
  whereRawQuery(db: knex) {
    return db('sd_users')
      .select('*')
      .whereRaw('group')
  }
 /**************************************************/    
}