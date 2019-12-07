const db = require('../client');

async function create13iv() {
  await db.connect();

  await db.query(`create function qnt_faixas_playlist(playlistid integer) returns bigint as $$
  begin
  return (select count(f.id) from playlist p join faixa_playlist fp on p.id=fp.playlist_id join faixa f on f.id=fp.faixa_id where p.id=playlistid);
  end; $$
  language plpgsql;`);

  await db.query(`create function qnt_faixas_playlist_barroco(playlistid integer) returns bigint as $$
  begin
  return (select count(p.id) from playlist p
  join faixa_playlist fp on p.id=fp.playlist_id
  join faixa f on f.id=fp.faixa_id
  join faixa_compositor fc on f.id=fc.faixa_id
  join compositor c on fc.compositor_id=c.id
  join periodo_musical pc on pc.id=c.periodo_id
  where p.id=playlistid and pc.descricao ILIKE 'Barroco');
  end; $$
  language plpgsql;`);

  await db.query(`create function qnt_faixas_playlist_concerto(playlistid integer) returns bigint as $$
  begin
  return (select count(p.id) from playlist p
  join faixa_playlist fp on p.id=fp.playlist_id
  join faixa f on f.id=fp.faixa_id
  join composicao c on c.id=f.composicao_id
  where p.id=playlistid and c.tipo ILIKE 'Concerto');
  end; $$
  language plpgsql;`);

  await db.query(`create materialized view view13iv
  as select * from playlist p
  where qnt_faixas_playlist(p.id)=qnt_faixas_playlist_barroco(p.id)
  and qnt_faixas_playlist(p.id)=qnt_faixas_playlist_concerto(p.id)
  with data;`);

  await db.query(`create unique index view13iv_index on view13iv(id);`);

  await db.end();

  console.log('Materialized view 13iv criada com sucesso');
}

create13iv();
