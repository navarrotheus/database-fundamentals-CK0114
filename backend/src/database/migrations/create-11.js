const db = require('../client');

async function create11() {
  await db.connect();

  await db.query(`create function nome_albums_compositor(var_nome varchar(100)) returns table (album_id integer, nome varchar(50)) as $$
	begin
	return query select distinct f.album_id, c.nome from compositor c join faixa_compositor fc on c.id=fc.compositor_id join faixa f on f.id=fc.faixa_id where c.nome like '%' || var_nome || '%';
	end; $$
	language plpgsql;`);

  await db.end();

  console.log('Funcao 11 criada com sucesso');
}

create11();
