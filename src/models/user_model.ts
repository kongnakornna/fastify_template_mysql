import * as knex from 'knex';
/**************************************************/    
export class UserModel {
create(db1: knex, data: any) {
    return db1('sd_users')
      .insert(data)
  }
lastidread(db1: knex) {
    return db1('sd_users')
      .select('user_id')
      .orderBy('user_id','desc')
  }
 updateuid(db1: knex, userId: any, data: any) {
    return db1('sd_users')
      .where('user_id', userId)
      .update(data)
  }
 validation_email(db1: knex, email: any) {
    return db1('sd_users')
      .select('email')
      .where('email', email)
    }
 validation_username(db1: knex, username: any) {
    return db1('sd_users')
      .select('username')
      .where('username', username)
    }
 validation_network_id(db1: knex, network_id: any) {
    return db1('sd_users')
      .select('network_id')
      .where('network_id', network_id)
    }

    where_sd_users_profile_id(db1: knex, sd_users_profile_id: any) {
        return db1('sd_users')
            .select('user_id', 'firstname', 'lastname', 'email')
            .select('username', 'level', 'status', 'network_id')
            .select('date')
        .where('sd_users_profile_id', sd_users_profile_id)
    }
    where_user_update_password(db1: knex, username: any, data: any) {
        return db1('sd_users')
        .where('username', username)
        .update(data)
    }
    where_sd_users_profile_id_update(db1: knex, sd_users_profile_id: any, data: any) {
        return db1('sd_users')
        .where('sd_users_profile_id', sd_users_profile_id)
        .update(data)
    }
    where_sd_users_profile_id_remove(db1: knex, sd_users_profile_id: any) {
        return db1('sd_users')
        .where('sd_users_profile_id', sd_users_profile_id)
        .del()
    }
  sd_users_profile(db1: knex, user_id: any) {
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname', 'email', 'username', 'level', 'status', 'network_id')
      .where('user_id', user_id)
   }
  login(db1: knex, username: any, password: any) {
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname', 'email', 'username', 'level')
      .where('username', username)
      .where('password', password)
      .where('status', 1)
  }
  resetPassword(db1: knex, datareset: any) {
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname')
      .select('email', 'username', 'level')
      .where('username', datareset)
      .orWhere('email', datareset)
    }
  resetpwd(db1: knex, datareset: any) {
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname', 'email', 'username', 'level')
      .where('username', datareset)
      .orWhere('email', datareset)
  }
  read(db1: knex) {
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname', 'email')
      .orderBy('user_id','desc')
      //.limit(3)
      // .offset(5)
      
  }

  search(db1: knex, query: any) {
    const _query = '%' + query + '%'
    return db1('sd_users')
      .select('user_id', 'firstname', 'lastname', 'email')
      .where('firstname', 'like', _query)
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
    SELECT user_id, firstname, lastname,email
    FROM users
    WHERE user_id=? AND firstname=?
    ORDER BY firstname DESC
    `
    return db1.raw(sql, [userId, firstName])
  }

   test(db1: knex) {
        return db1('sd_users as u')
            .join('sd_users_profile as p', 'u.user_id', 'p.user_id')
            // .select('u.*')
            .select('u.user_id', 'u.firstname', 'u.lastname', 'u.email', 'u.date')
            .select('p.email as mail')
            // .where('users.user_id!=','')
            .orderBy('u.user_id', 'desc')
            .limit(3)
            .offset(5)
    }
  whereRawQuery(db1: knex) {
    return db1('sd_users')
      .select('*')
      .whereRaw('group')
  }
 /**************************************************/    
}