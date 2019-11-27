const db = require('../client');

async function create8a() {
  await db.connect();

  await db.query(`create function faixas_playlist(plalist_id integer) returns table (faixa_id integer, playlist_id integer, album_id integer, composicao_id integer) as $$
  begin
  return query (select f.id faixa_id, fp.playlist_id, f.album_id, f.composicao_id from faixa f join faixa_playlist fp on f.id = fp.faixa_id where fp.playlist_id=plalist_id);
  end; $$
  language plpgsql;`);

  await db.query(`create function qnt_faixas_playlist(plalist_id integer) returns bigint as $$
  begin
  return (select count(distinct faixa_id) from faixas_playlist(plalist_id));
  end; $$
  language plpgsql;`);

  await db.query(`create function qnt_faixas_playlist_concerto(plalist_id integer) returns bigint as $$
  begin
  return (select count(fp.composicao_id) from faixas_playlist(plalist_id) fp join composicao c on c.tipo='Concerto');
  end; $$
  language plpgsql;`);

  await db.query(`create function compositores_playlist(plalist_id integer) returns table (compositor_id integer) as $$
	begin
	return query (select fc.compositor_id from faixas_playlist(plalist_id) fp join faixa_compositor fc on fc.faixa_id=fp.faixa_id);
	end; $$
	language plpgsql;`);

  await db.query(`create function compositores_periodo_playlist(plalist_id integer) returns table (periodo_id integer) as $$
	begin
	return query (select c.periodo_id from compositores_playlist(plalist_id) cp join compositor c on c.id=cp.compositor_id);
	end; $$
	language plpgsql;`);

  await db.query(`create function qnt_faixas_playlist_barroco(plalist_id integer) returns bigint as $$
  begin
  return (select count(p.id) from compositores_periodo_playlist(plalist_id) cpp join periodo_musical p on cpp.periodo_id=p.id where p.descricao='Barroco');
  end; $$
  language plpgsql;`);

  await db.query(`create view playlist_concerto_barroco as select p.id, p.nome from playlist p where qnt_faixas_playlist(p.id)=qnt_faixas_playlist_barroco(p.id) and qnt_faixas_playlist(p.id)=qnt_faixas_playlist_concerto(p.id)`);

  await db.end();

  console.log('View criada com sucesso');
}

create8a();
