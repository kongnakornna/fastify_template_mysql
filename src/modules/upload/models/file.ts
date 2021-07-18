import * as knex from 'knex';
export class FileModel {

  save(db: knex, file: any) {
    return db('fi_files')
      .insert(file, 'file_id') // return file_id หลัง insert
  }

  romovefile(db: knex, fileId: any) {
    return db('fi_files')
          .where('file_id', fileId)
          .del()
  }

  getInfo(db: knex, fileId: any) {
    return db('fi_files')
      .where('file_id', fileId)
  }

}