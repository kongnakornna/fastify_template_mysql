import * as knex from 'knex';

export class FileModel {

  save(db1: knex, file: any) {
    return db1('fi_files')
      .insert(file, 'file_id') // return file_id หลัง insert
  }

  getInfo(db1: knex, fileId: any) {
    return db1('fi_files')
      .where('file_id', fileId)
  }

}