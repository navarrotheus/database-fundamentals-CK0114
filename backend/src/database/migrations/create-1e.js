const db = require('../client');

async function create1e() {
  await db.connect();

  await db.query(
    `create view qnt_faixas_ddd as select f.album_id, count(f.album_id) from album a join faixa f on a.id=f.album_id where tipo_gravacao='DDD' group by f.album_id`
  );

  await db.query(`create function check_qnt_faixa_ddd(faixa_album_id integer) returns bigint as $$
	begin
	return (select count from qnt_faixas_ddd where album_id = faixa_album_id);
	end; $$
  language plpgsql;`);

  await db.query(
    `create view albums_ddd as select distinct f.album_id, a.preco_compra from faixa f join album a on f.album_id=a.id where check_qnt_faixa_ddd(f.album_id)=check_qnt_faixa(f.album_id)`
  );

  await db.query(`create function check_media_albums_ddd() returns double precision as $$
	begin
	return (select avg(preco_compra) from albums_ddd);
	end; $$
  language plpgsql;`);

  await db.query(
    `alter table album add check (preco_compra <= 3*check_media_albums_ddd())`
  );

  await db.end();

  console.log('Restrição criada com sucesso');
}

create1e();
