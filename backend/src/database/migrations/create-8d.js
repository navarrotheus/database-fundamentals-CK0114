const db = require('../client');

async function create8a() {
  await db.connect();

  await db.query(`create function qnt_faixas_playlist(playlistid integer) returns bigint as $$
  begin
  return (select count(f.id) from playlist p join faixa_playlist fp on p.id=fp.playlist_id join faixa f on f.id=fp.faixa_id where p.id=playlistid);
  end; $$
  language plpgsql;`);

  await db.end();

  console.log('Materialized view 8d criada com sucesso');
}

create8a();
