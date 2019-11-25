const db = require('../client');

async function create5() {
  await db.connect();

  await db.query(
    `create function qnt_albums_playlist(plalist_id integer) returns bigint as $$
    begin
    return (select count(distinct f.album_id) from faixa f join faixa_playlist fp on f.id = fp.faixa_id where fp.playlist_id=plalist_id);
    end; $$
    language plpgsql;`
  );

  await db.query(`create view qnt_albums_playlist as select p.nome, qnt_albums_playlist(p.id) from playlist p
  `);

  await db.end();

  console.log('View criada com sucesso');
}

create5();
