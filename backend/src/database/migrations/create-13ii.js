const db = require('../client');

async function create13ii() {
  await db.connect();

  await db.query(`create function qnt_faixas_dvorack_playlist(playlistid integer) returns bigint as $$
  begin
  return (select count(f.id) from playlist p
  join faixa_playlist fp on p.id=fp.playlist_id
  join faixa f on f.id=fp.faixa_id
  join faixa_compositor fc on f.id=fc.faixa_id
  join compositor c on fc.compositor_id=c.id
  where c.nome ILIKE 'Dvorack' and p.id=playlistid);
  end; $$
  language plpgsql;`);

  await db.query(`create function view13ii() returns varchar(100) as $$
  declare rec_view13ii record;
      nome_gravadora_maior character varying(50);
      qnt_gravadora_maior bigint default 0;
      cur_view13ii cursor for select g.nome, count(g.id) from gravadora g
      join album a on a.gravadora_id=g.id
      join faixa f on a.id=f.album_id
      join faixa_playlist fp on fp.faixa_id=f.id
      where qnt_faixas_dvorack_playlist(fp.playlist_id) >= 1
      group by g.id;
  begin
    open cur_view13ii;
    loop
      fetch cur_view13ii into rec_view13ii;
      exit when not found;
      if rec_view13ii.count > qnt_gravadora_maior then
        qnt_gravadora_maior := rec_view13ii.count;
        nome_gravadora_maior := rec_view13ii.nome;
      end if;
    end loop;
    close cur_view13ii;
    return nome_gravadora_maior;
  end; $$
  language plpgsql;`);

  await db.end();

  console.log('Funcao 13ii criada com sucesso');
}

create13ii();
