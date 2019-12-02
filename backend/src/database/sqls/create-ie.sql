create function media_albums_ddd() returns double precision as $$
	begin
	return (select distinct avg(a.preco_compra) from faixa f join album a on f.album_id=a.id where qnt_faixas_ddd_album(f.album_id)=qnt_faixas_album(f.album_id));
	end; $$
  language plpgsql;
  
  create function check_1e() returns trigger as $$
	begin
	if (new.preco_compra >= 3*media_albums_ddd()) then
		raise exception 'O preço de compra de um álbum não dever ser superior a três vezes a média do preço de compra de álbuns, com todas as faixas com tipo de gravação DDD.';
	end if;
	return new;
	end; $$
  language plpgsql;
  
  create trigger check_1e
  before insert or update on album
  for each row execute procedure check_1e();