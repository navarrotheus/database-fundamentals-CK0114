require('dotenv/config');
const db = require('../index');

async function createTablespaces(){
  await db.connect();
  await db.query(`create tablespace tablespace01 location ${process.env.TS1_LOCATION}`);
  await db.query(`create tablespace tablespace02 location ${process.env.TS2_LOCATION}`);
  await db.query(`create tablespace tablespace03 location ${process.env.TS3_LOCATION}`);
  await db.end();

  console.log('Tablespaces criadas com sucesso');
}

createTablespaces();