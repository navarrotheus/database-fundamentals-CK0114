const db = require('../client');

async function create13i() {
  await db.connect();

  await db.query(`create function media_preco_albums() returns double precision as $$
	begin
	return (select distinct avg(a.preco_compra) from faixa f join album a on f.album_id=a.id);
	end; $$
  language plpgsql;`);

  await db.query(`create materialized view albums_maior_media
  as select distinct f.album_id, a.preco_compra from album a join faixa f on f.album_id=a.id where preco_compra > media_preco_albums()
  with data;`);

  await db.query(`create unique index albums_maior_media_index on albums_maior_media(album_id);`);

  await db.end();

  console.log('Materialized view 13i criada com sucesso');
}

create13i();
