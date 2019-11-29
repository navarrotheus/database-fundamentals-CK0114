const db = require('../client');

async function create3a() {
  await db.connect();

  await db.query(`create function faixas_album(albumid integer) returns table (faixa_id integer) as $$
	begin
	return query (select f.id from album join faixa f on album.id=f.album_id where f.album_id=albumid);
	end; $$
	language plpgsql;`);

  await db.query(`create function compositores_album(albumid integer) returns table (compositor_id integer) as $$
	begin
	return query (select distinct fc.compositor_id from faixa_compositor fc join faixas_album(albumid) fa on fc.faixa_id=fa.faixa_id);
	end; $$
	language plpgsql;`);

  await db.query(`create function periodos_compositores_album(albumid integer) returns table (periodo_id integer) as $$
	begin
	return query (select distinct c.periodo_id from compositores_album(albumid) ca join compositor c on ca.compositor_id=c.id);
	end; $$
	language plpgsql;`);
  
  await db.query(`create function qnt_faixas_barroco_album(albumid integer) returns bigint as $$
	begin
	return (select count(p.descricao) from periodos_compositores_album(albumid) pc join periodo_musical p on pc.periodo_id=p.id where p.descricao='Barroco');
	end; $$
  language plpgsql;`);
  
  await db.query(`create function qnt_faixas_ddd_album(albumid integer) returns bigint as $$
  begin
  return (select count(f.album_id) from album a join faixa f on a.id=f.album_id where tipo_gravacao ILIKE 'DDD' and f.album_id=albumid);
  end; $$
  language plpgsql;`);

  await db.query(`create function check_3a() returns trigger as $$
	begin
	if (qnt_faixas_album(new.id)=qnt_faixas_barroco_album(new.id) and qnt_faixas_album(new.id) != qnt_faixas_ddd_album(new.id)) then
		raise exception 'Um álbum, com faixas de músicas do período barroco, só pode ser adquirido, caso o tipo de gravação seja DDD.';
	end if;
	return new;
	end; $$
	language plpgsql;`);

  await db.query(`create trigger check_3a
  before insert or update on album
  for each row execute procedure check_3a();`);

  await db.end();

  console.log('Restrição 3a criada com sucesso');
}

create3a();
