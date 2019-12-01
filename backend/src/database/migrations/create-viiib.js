const db = require('../client');

async function createviiib() {
  await db.connect();

  await db.query(`create function tempo_total_insert() returns trigger as $$
	begin
	update playlist p set tempo_total = tempo_total - (-tempo_execucao) from faixa f where p.id=new.playlist_id and f.id=new.faixa_id; 
	return new;
	end; $$
  language plpgsql;`);

  await db.query(`create trigger tempo_total_insert
  before insert or update on faixa_playlist
  for each row execute procedure tempo_total_insert();`);

  await db.query(`create function tempo_total_remove() returns trigger as $$
	begin
	update playlist p set tempo_total = tempo_total - -(-tempo_execucao) from faixa f where p.id=old.playlist_id and f.id=old.faixa_id; 
	return old;
	end; $$
  language plpgsql;`);

  await db.query(`create trigger tempo_total_remove
  before delete on faixa_playlist
  for each row execute procedure tempo_total_remove();`);

  await db.end();

  console.log('Trigger viiib criada com sucesso');
}

createviiib();
