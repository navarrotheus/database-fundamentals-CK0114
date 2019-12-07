const db = require('../client');

async function create10() {
  await db.connect();

  await db.query(
    `create materialized view qnt_albums_playlist
    as select p.nome, count(distinct f.album_id) from faixa f join faixa_playlist fp on f.id = fp.faixa_id join playlist p on p.id=fp.playlist_id where fp.playlist_id=p.id group by p.nome
    with data;`
  );

  await db.query(`create unique index qnt_albums_playlist_index on qnt_albums_playlist(nome);`);

  await db.end();

  console.log('Materialized view 10 criada com sucesso');
}

create10();
