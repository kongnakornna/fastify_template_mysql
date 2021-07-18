import * as knex from 'knex';

export class FileModel {

  save(db1: knex, file: any) {
    return db1('files')
      .insert(file, 'file_id')
  }

  getInfo(db1: knex, fileId: any) {
    return db1('files')
      .where('file_id', fileId)
  }

}