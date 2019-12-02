create function qnt_faixas_barroco_album(albumid integer) returns bigint as $$
  begin
  return (select count(pm.descricao) from periodo_musical pm
join compositor c on pm.id=c.periodo_id
join faixa_compositor fc on c.id=fc.compositor_id
join faixa f on f.id=fc.faixa_id
join album a on a.id=f.album_id
where pm.descricao ILIKE 'Barroco' and a.id=albumid);
  end; $$
language plpgsql;


create function qnt_faixas_ddd_album(albumid integer) returns bigint as $$
  begin
  return (select count(f.album_id) from album a join faixa f on a.id=f.album_id where tipo_gravacao ILIKE 'DDD' and f.album_id=albumid);
  end; $$
  language plpgsql;
  
create function check_3a() returns trigger as $$
  begin
  if (select qnt_faixas_album(a.id)=qnt_faixas_barroco_album(a.id) and qnt_faixas_album(a.id)!=qnt_faixas_ddd_album(a.id)
	  from faixa f join faixa_compositor fc on f.id=fc.faixa_id
	  join compositor c on c.id=fc.compositor_id
		 join album a on a.id=faixa_id
		 where fc.compositor_id=new.compositor_id and fc.faixa_id=new.faixa_id) then
	  raise exception 'Um álbum, com faixas de músicas do período barroco, só pode ser adquirido, caso o tipo de gravação seja DDD.';
  end if;
  return new;
  end; $$
  language plpgsql;
  
create trigger check_3a
  before insert or update on faixa_compositor
  for each row execute procedure check_3a();