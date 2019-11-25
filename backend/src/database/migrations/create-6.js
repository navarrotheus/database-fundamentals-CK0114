const db = require('../client');

async function create6() {
  await db.connect();

  await db.query(
    `create view album_compositor as select distinct f.album_id, fc.compositor_id from faixa f join faixa_compositor fc on f.id = fc.faixa_id`
  );

  await db.query(`create function nome_albums_compositor (name varchar(100)) returns table (album_id integer, nome varchar(100)) as $$
	begin
	return query (select ac.album_id, c.nome from compositor c join album_compositor ac on c.id=ac.compositor_id where c.nome like '%' || name || '%');
	end; $$
	language plpgsql;`);

  await db.end();

  console.log('Funcao criada com sucesso');
}

create6();
