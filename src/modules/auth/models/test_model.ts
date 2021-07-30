import * as knex from 'knex';
export class TestModel {

    test(db1: knex) {
        return db1('sd_users as u')
            .join('sd_users_profile as p', 'u.user_id', 'p.user_id')
            // .select('u.*')
            .select('u.user_id', 'u.first_name', 'u.last_name', 'u.email', 'u.date')
            .select('p.email as mail')
            // .where('users.user_id!=','')
            .orderBy('u.user_id', 'desc')
            .limit(3)
            .offset(5)
    }
}