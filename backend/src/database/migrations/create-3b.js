const db = require('../client');

async function create3b() {
  await db.connect();

  await db.query(`create function qnt_faixas_album(faixa_album_id integer) returns bigint as $$
  begin
  return (select count(album.id) from album join faixa on album.id=faixa.album_id where album_id=faixa_album_id group by faixa.album_id);
  end; $$
language plpgsql;`);

  await db.query(
    `alter table faixa add check (qnt_faixas_album(album_id) < 64)`
  );

  await db.end();

  console.log('Restrição 3b criada com sucesso');
}

create3b();
