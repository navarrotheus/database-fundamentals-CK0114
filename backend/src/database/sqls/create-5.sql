create materialized view qnt_albums_playlist
    as select p.nome, count(distinct f.album_id) from faixa f join faixa_playlist fp on f.id = fp.faixa_id join playlist p on p.id=fp.playlist_id where fp.playlist_id=p.id group by p.nome
    with data;
	
create unique index qnt_albums_playlist_index on qnt_albums_playlist(nome);