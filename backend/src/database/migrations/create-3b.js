const db = require('../client');

async function create3b() {
  await db.connect();

  await db.query(
    `create view qnt_faixas as select faixa.album_id, count(faixa.album_id) from album join faixa on album.id = faixa.album_id group by faixa.album_id`
  );

  await db.query(`create function check_qnt_faixa(faixa_album_id integer) returns bigint as $$
    begin
    return (select count from qnt_faixas where album_id = faixa_album_id );
    end; $$
  language plpgsql;`);

  await db.query(
    `alter table faixa add check (check_qnt_faixa(album_id) < 64)`
  );

  await db.end();

  console.log('Restrição criada com sucesso');
}

create3b();
