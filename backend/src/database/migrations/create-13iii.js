const db = require('../client');

async function create8c() {
  await db.connect();

  await db.query(`create function view13iii() returns varchar(100) as $$
  declare rec_view13iii record;
      nome_compositor_maior character varying(50);
      qnt_compositor_maior bigint default 0;
      cur_view13iii cursor for select c.nome, count(c.id) from playlist p
      join faixa_playlist fp on p.id=fp.playlist_id
      join faixa f on fp.faixa_id=f.id
      join faixa_compositor fc on fc.faixa_id=f.id
      join compositor c on c.id=fc.compositor_id
    group by c.id;
  begin
    open cur_view13iii;
    loop
      fetch cur_view13iii into rec_view13iii;
      exit when not found;
      if rec_view13iii.count > qnt_compositor_maior then
        qnt_compositor_maior := rec_view13iii.count;
        nome_compositor_maior := rec_view13iii.nome;
      end if;
    end loop;
    close cur_view13iii;
    return nome_compositor_maior;
  end; $$
  language plpgsql;`);

  await db.end();

  console.log('Funcao 13iii criada com sucesso');
}

create13iii();
