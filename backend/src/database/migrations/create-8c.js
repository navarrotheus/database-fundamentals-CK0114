const db = require('../client');

async function create8c() {
  await db.connect();

  await db.query(`create function view8c() returns varchar(100) as $$
  declare rec_view8c record;
      nome_compositor_maior character varying(50);
      qnt_compositor_maior bigint default 0;
      cur_view8c cursor for select c.nome, count(c.id) from playlist p
      join faixa_playlist fp on p.id=fp.playlist_id
      join faixa f on fp.faixa_id=f.id
      join faixa_compositor fc on fc.faixa_id=f.id
      join compositor c on c.id=fc.compositor_id
    group by c.id;
  begin
    open cur_view8c;
    loop
      fetch cur_view8c into rec_view8c;
      exit when not found;
      if rec_view8c.count > qnt_compositor_maior then
        qnt_compositor_maior := rec_view8c.count;
        nome_compositor_maior := rec_view8c.nome;
      end if;
    end loop;
    close cur_view8c;
    return nome_compositor_maior;
  end; $$
  language plpgsql;`);

  await db.end();

  console.log('Funcao 8c criada com sucesso');
}

create8b();
