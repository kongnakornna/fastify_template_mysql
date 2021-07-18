import * as knex from 'knex';

export class CustomerModel {

  test(db1: knex) {
    return db1('customers')
  }

}