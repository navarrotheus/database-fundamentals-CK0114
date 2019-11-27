const db = require('../client');

async function create8a() {
  await db.connect();

  await db.query(
    `create view albums_preco as select distinct f.album_id, a.preco_compra from faixa f join album a on f.album_id=a.id`
  );

  await db.query(`create function media_preco_albums() returns double precision as $$
	begin
	return (select avg(preco_compra) from albums_preco);
	end; $$
  language plpgsql;`);

  await db.query(
    `create view albums_maior_media as select album_id from albums_preco where preco_compra > media_preco_albums()`
  );

  await db.end();

  console.log('View criada com sucesso');
}

create8a();
