const db = require('../../database/pool');

class Playlist {
  async getPlaylists() {
    const playlists = await db.query(
      `select p.id, p.nome from playlist p`
    );

    return playlists;
  }

  async getFaixasPlaylist(id) {
    const playlist = await db.query(
      `select f.id id_faixa, f.descricao nome_faixa, f.tipo_gravacao tipo_faixa, f.tempo_execucao faixa_tempo, f.numero_faixa faixa_numero from playlist p join faixa_playlist fp on p.id=fp.playlist_id join faixa f on fp.faixa_id=f.id where p.id=${id}`
    );

    return playlist;
  }

  async getById(id) {
    const playlist = await db.query(
      `select p.nome nome_playlist, p.data_criacao data_playlist, p.tempo_total tempo_playlist from playlist p where p.id=${id}`
    );

    return playlist;
  }

  async postPlaylist(name) {
    await db.query(`insert into playlist (nome) values ('${name}')`);

    const playlists = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p`
    );

    return playlists;
  }

  async deletePlaylist(id) {
    await db.query(`delete from playlist p where p.id=${id}`);

    const playlists = await db.query(
      `select p.nome, p.data_criacao, p.tempo_total from playlist p`
    );

    return playlists;
  }

  async addFaixaPlaylist(faixa_id, playlist_id) {
    await db.query(`insert into faixa_playlist values (${faixa_id}, ${playlist_id}) `);

    const playlists = await db.query(
      `select p.id id_playlist, p.nome nome_playlist, f.id id_faixa, f.descricao nome_faixa from playlist p join faixa_playlist fp on p.id=fp.playlist_id join faixa f on fp.faixa_id=f.id where p.id=${playlist_id}`
    );

    return playlists;
  }

  async removeFaixaPlaylist(faixa_id, playlist_id){
    await db.query(`delete from faixa_playlist fp where fp.faixa_id=${faixa_id} and fp.playlist_id=${playlist_id}`);

    const playlist = await db.query(
      `select f.id id_faixa, f.descricao nome_faixa, f.tipo_gravacao tipo_faixa from playlist p join faixa_playlist fp on p.id=fp.playlist_id join faixa f on fp.faixa_id=f.id where p.id=${playlist_id}`
    );

    return playlist;
  }
}

export default Playlist;
