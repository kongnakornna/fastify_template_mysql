import * as knex from 'knex';

export class TestModel {

  test(db1: knex) {
    return db1('users')
  }

}