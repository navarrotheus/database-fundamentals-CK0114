const db = require('../index');

async function dropTables(){
  await db.connect();
  await db.query('drop schema public cascade;');
  await db.query('create schema public;');
  await db.end();

  console.log('Tabelas removidas');
}

dropTables();